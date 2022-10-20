import { Div } from './styles'
import { useParams } from 'react-router-dom'
import { ReactNode, useContext, useEffect, useRef, useState } from 'react'
import {
  client,
  socketsConnectionStatus,
  SOCKETS_URL,
} from '../../core/settings'
import { ChatType, MessagesType, MessageType } from '../../code/types/chat'
import useWebSocket from 'react-use-websocket'
import { AuthContext } from '../../code/contexts/Auth'
import { MessageInput } from './components/MessageInput'
import { Message } from './components/Message'
import { NewUserEnter } from './components/NewUserEnter'
import { ChatHeader } from './components/ChatHeader'
import { ChatContainer } from './components/ChatContainer'
import { ContentForNotOpenConnection } from './components/ContentForNotOpenConnection'
import { DateInfo } from './components/DateInfo'

export function Chat() {
  const params = useParams()
  const {
    auth: { token, username: myUsername },
  } = useContext(AuthContext)
  const [chat, setChat] = useState<ChatType | null>(null)
  const [chatContent, setChatContent] = useState<ReactNode[]>([])
  const usersJoined = useRef<string[]>([myUsername])

  useEffect(() => {
    client.get(`chat-detail/${params.code}`).then((response) => {
      setChat(response.data as ChatType)
      const messagesData: MessagesType = response.data.messages
      setChatContent((prev) => {
        let lastDate: null | Date = null
        const initialChatContent = messagesData.messages.map((message) => {
          const messageDate = new Date(message.created_at)
          let includeDate = false
          if (
            !lastDate ||
            messageDate.getDate() !== lastDate!.getDate() ||
            messageDate.getMonth() !== lastDate!.getMonth()
          ) {
            lastDate = messageDate
            includeDate = true
          }

          return (
            <div key={message.created_at} className="flex flex-col">
              {includeDate ? <DateInfo dateObj={messageDate} /> : ''}
              <Message
                message={message}
                myUsername={myUsername}
                key={message.created_at}
              />
            </div>
          )
        })

        const today = new Date()
        const lastDateValue: null | Date = lastDate // Typescript reads last date as null always
        if (
          !lastDateValue ||
          (today.getDate() !== lastDate!.getDate() &&
            today.getMonth() !== lastDate!.getMonth())
        ) {
          initialChatContent.push(
            <DateInfo dateObj={today} key={today.getTime()} />,
          )
        }

        return initialChatContent
      })
    })
  }, [params.code, myUsername])

  const { readyState, sendJsonMessage } = useWebSocket(
    `${SOCKETS_URL}/chats/${params.code}`,
    {
      onMessage: (e) => {
        const eventProcessors = {
          'new.connection': onNewConnection,
          'new.message': onNewMessage,
        }
        const receivedData: {
          type: keyof typeof eventProcessors
          payload: any
        } = JSON.parse(e.data)
        const eventProcessor = eventProcessors[receivedData.type]
        eventProcessor(receivedData.payload)
      },
      queryParams: { Authorization: token },
    },
  )

  function onNewConnection({ username }: { username: string }) {
    if (!usersJoined.current.includes(username)) {
      setChatContent((prev) => {
        const newChatContent = [...prev]
        newChatContent.push(<NewUserEnter username={username} key={username} />)
        return newChatContent
      })
      usersJoined.current.push(username)
    }
  }

  function onNewMessage(message: MessageType) {
    setChatContent((prev) => {
      const newChatContent = [...prev]
      newChatContent.push(
        <Message
          message={message}
          myUsername={myUsername}
          key={message.created_at}
        />,
      )
      return newChatContent
    })
  }

  function onSendMessage(message: string) {
    sendJsonMessage({
      token,
      text: message,
    })
  }

  return (
    <Div.container className="min-h-screen mx-auto flex flex-col items-center justify-between">
      <ChatHeader chat={chat} />
      {socketsConnectionStatus[readyState] === 'Open' ? (
        <>
          <ChatContainer chatContent={chatContent} />
          <MessageInput onSendMessage={onSendMessage} />
        </>
      ) : (
        <ContentForNotOpenConnection
          connectionStatus={socketsConnectionStatus[readyState]}
        />
      )}
    </Div.container>
  )
}
