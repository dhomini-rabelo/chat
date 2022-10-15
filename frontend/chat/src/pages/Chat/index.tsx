import { Div } from './styles'
import { BackButton } from '../../components/BackButton'
import { useParams } from 'react-router-dom'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { client, SOCKETS_URL } from '../../core/settings'
import { ChatType, MessageType } from '../../code/types/chat'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { AuthContext } from '../../code/contexts/Auth'
import { MessageInput } from './components/MessageInput'
import { Message } from './components/Message'

export function Chat() {
  const params = useParams()
  const {
    auth: { token, username: myUsername },
  } = useContext(AuthContext)
  const [chat, setChat] = useState<ChatType | null>(null)
  const [chatContent, setChatContent] = useState<ReactNode[]>([])

  useEffect(() => {
    client.get(`chat-detail/${params.code}`).then((response) => {
      setChat(response.data as ChatType)
    })
  }, [params.code])

  const { readyState, sendJsonMessage } = useWebSocket(
    `${SOCKETS_URL}/chats/${params.code}`,
    {
      onOpen: (e) => {
        console.log('Connected!', e)
      },
      onClose: (e) => {
        console.log('Disconnected!', e)
      },
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

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState]

  function onNewConnection({ username }: { username: string }) {
    setChatContent((prev) => {
      const newChatContent = [...prev]
      newChatContent.push(
        <div
          className="rounded-2xl bg-gray-200 text-gray-500 mx-auto text-sm py-1 px-4 my-4"
          key={newChatContent.length}
        >
          {username} entrou no chat
        </div>,
      )
      return newChatContent
    })
  }

  function onNewMessage(message: MessageType) {
    setChatContent((prev) => {
      const newChatContent = [...prev]
      newChatContent.push(<Message message={message} myUsername={myUsername} />)
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
      <div className="w-full flex items-center justify-between mt-6">
        <BackButton to="/chats" />
        <strong>
          {chat?.code || '...'} {connectionStatus}
        </strong>
        {chat ? (
          <img
            className="rounded-full h-12 w-12 bg-pBlue-300"
            src={chat.image}
            alt="chat-image"
          />
        ) : (
          <div className="rounded-full h-12 w-12 bg-gray-400"></div>
        )}
      </div>

      <div
        id="messages-container"
        className="grow my-3 w-full flex flex-col justify-end"
      >
        {chatContent.map((Element) => Element)}
      </div>

      <MessageInput onSendMessage={onSendMessage} />
    </Div.container>
  )
}
