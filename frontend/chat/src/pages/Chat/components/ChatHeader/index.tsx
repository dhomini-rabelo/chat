import { ChatType } from '../../../../code/types/chat'
import { BackButton } from '../../../../components/BackButton'

export function ChatHeader({ chat }: { chat: ChatType | null }) {
  return (
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
  )
}
