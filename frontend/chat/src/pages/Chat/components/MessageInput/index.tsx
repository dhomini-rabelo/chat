import { useRef, KeyboardEvent } from 'react'
import { Div } from './styles'

export function MessageInput({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void
}) {
  const inputMessageRef = useRef<null | HTMLTextAreaElement>(null)

  function handleSendMessage() {
    if (inputMessageRef.current!.value) {
      const newMessageCopy = inputMessageRef.current!.value.slice()
      onSendMessage(newMessageCopy)
      inputMessageRef.current!.blur()
      inputMessageRef.current!.value = ''
      inputMessageRef.current!.focus()
    }
  }

  function handleSendMessageByKeyboard(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      handleSendMessage()
      e.preventDefault()
    }
  }

  return (
    <Div.container className="w-full relative d-block">
      <textarea
        id="room-input"
        ref={inputMessageRef}
        className="h-14 input-form block pr-12 pt-4 resize-none"
        placeholder="Mensagem"
        onKeyDown={handleSendMessageByKeyboard}
      />
      <button onClick={handleSendMessage}>
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
      </button>
    </Div.container>
  )
}
