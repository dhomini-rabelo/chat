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
  /* eslint-enable */
  return (
    <Div.container
      type={username === myUsername ? 'my' : 'other'}
      className="p-2 flex flex-col mt-2"
    >
      {username !== myUsername && (
        <span className="font-extrabold text-xs mb-1">{username}</span>
      )}
      <span className="w-full pr-7">{text}</span>
      <span className="self-end time">
        {messageCreatedDate.getHours()}:{messageCreatedDate.getMinutes()}
      </span>
    </Div.container>
  )
}
