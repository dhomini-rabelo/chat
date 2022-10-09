import { Link } from 'react-router-dom'
import { ChatType } from '../../../../code/types/chat'
import { Div } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function ChatList({ chat }: { chat: ChatType }) {
  const chatLastDate = new Date(
    chat.messages.last_message?.created_at || chat.created_at,
  )

  return (
    <Div.chat className="flex items-center justify-between py-3">
      <img
        src={chat.image}
        alt="chat-image"
        className="rounded-full h-12 w-12"
      />
      <div className="flex flex-col items-start grow ml-3 mr-3">
        <strong className="text-pBlack-700 leading-5">{chat.code}</strong>
        <span className="text-pBlack-300 text-sm text-max">
          {chat.messages.last_message?.text || '...'}
        </span>
      </div>
      <Link className="flex flex-col items-end" to="/chat">
        <span className="text-pBlack-300 text-xs mr-4">
          {formatDistanceToNow(chatLastDate, {
            locale: ptBR,
            addSuffix: false,
          })}
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.70707 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70707 18.7071C9.31657 19.0976 8.68338 19.0976 8.29287 18.7071C7.90237 18.3166 7.90237 17.6834 8.29287 17.2929L13.5858 12L8.29287 6.70711C7.90237 6.31658 7.90237 5.68342 8.29287 5.29289C8.68338 4.90237 9.31657 4.90237 9.70707 5.29289Z"
            fill="#243443"
          />
        </svg>
      </Link>
    </Div.chat>
  )
}
