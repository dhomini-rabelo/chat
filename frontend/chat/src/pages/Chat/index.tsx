import { Div } from './styles'
import { BackButton } from '../../components/BackButton'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { client } from '../../core/settings'
import { ChatType } from '../../code/types/chat'
// import useWebSocket, { ReadyState } from 'react-use-websocket'

export function Chat() {
  const params = useParams()
  const [chat, setChat] = useState<ChatType | null>(null)

  useEffect(() => {
    client.get(`chat-detail/${params.code}`).then((response) => {
      setChat(response.data as ChatType)
    })
  }, [params.code])

  // const { readyState } = useWebSocket('ws://127.0.0.1:8000/chats/AB-123', {
  //   onOpen: (e) => {
  //     console.log('Connected!', e)
  //   },
  //   onClose: (e) => {
  //     console.log('Disconnected!', e)
  //   },
  //   onMessage: (e) => {
  //     console.log(e)
  //   },
  // })

  // const connectionStatus = {
  //   [ReadyState.CONNECTING]: 'Connecting',
  //   [ReadyState.OPEN]: 'Open',
  //   [ReadyState.CLOSING]: 'Closing',
  //   [ReadyState.CLOSED]: 'Closed',
  //   [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  // }[readyState]
  // { connectionStatus }

  return (
    <Div.container className="min-h-screen mx-auto flex flex-col items-center justify-between">
      <div className="w-full flex items-center justify-between mt-6">
        <BackButton to="/chats" />
        <strong>{chat?.code || '...'}</strong>
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
        <Div.message type="other" className="p-2 flex flex-col">
          <span className="w-full pr-7">Texto</span>
          <span className="self-end time">12:25</span>
        </Div.message>
        <Div.message type="my" className="p-2 flex flex-col">
          <span className="w-full pr-7">Texto meu</span>
          <span className="self-end time">12:25</span>
        </Div.message>
      </div>

      <div className="w-full mb-8 relative">
        <textarea
          id="room-input"
          className="h-14 input-form block pr-12 pt-4"
          placeholder="Mensagem"
        />
        <svg
          width="31"
          height="24"
          viewBox="0 0 31 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-3 top-4"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.33822 9.45413C7.47284 9.72505 7.68344 9.96786 7.95392 10.164C8.2244 10.3601 8.5476 10.5043 8.89879 10.5856L16.6225 12L8.97141 13.3359C8.61212 13.4143 8.28061 13.5581 8.00306 13.756C7.7255 13.9539 7.5095 14.2006 7.37211 14.4764L5.53559 19.5862C5.43511 19.7844 5.41465 20.0027 5.47705 20.2106C5.53946 20.4185 5.68164 20.6058 5.88381 20.7464C6.08598 20.8869 6.33811 20.9738 6.60513 20.995C6.87216 21.0161 7.14081 20.9704 7.37373 20.8643L25.1451 12.9001C25.3469 12.8111 25.5151 12.6807 25.6322 12.5224C25.7494 12.3641 25.8111 12.1837 25.8111 12C25.8111 11.8163 25.7494 11.6359 25.6322 11.4776C25.5151 11.3193 25.3469 11.1889 25.1451 11.0999L7.37373 3.13575C7.14081 3.0296 6.87216 2.98391 6.60513 3.00504C6.33811 3.02616 6.08598 3.11305 5.88381 3.25362C5.68164 3.3942 5.53946 3.58147 5.47705 3.7894C5.41465 3.99733 5.43511 4.21559 5.53559 4.41383L7.33822 9.45413Z"
            fill="#AAB0B7"
          />
        </svg>
      </div>
    </Div.container>
  )
}
