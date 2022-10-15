import { MessageType } from '../../../../code/types/chat'
import { Div } from './styles'

export function Message({
  message,
  myUsername,
}: {
  message: MessageType
  myUsername: string
}) {
  /* eslint-disable */
  const { username, text, created_at } = message
  const messageCreatedDate = new Date(created_at)
  const isMyMessage = username === myUsername
  /* eslint-enable */
  return (
    <Div.container
      type={isMyMessage ? 'my' : 'other'}
      className="p-2 flex flex-col mt-2"
    >
      {!isMyMessage && (
        <span className="font-extrabold text-sm mb-2">{username}</span>
      )}
      <span className="w-full pr-7">{text}</span>
      <span className="self-end time">
        {messageCreatedDate.getHours().toString().padStart(2, '0')}:
        {messageCreatedDate.getMinutes().toString().padStart(2, '0')}
      </span>
    </Div.container>
  )
}
