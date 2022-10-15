import { ReactNode, useEffect, useRef } from 'react'

export function ChatContainer({ chatContent }: { chatContent: ReactNode[] }) {
  const chatContentRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    chatContentRef.current!.scrollTop = chatContentRef.current!.scrollHeight
  }, [chatContent])

  return (
    <div
      ref={chatContentRef}
      id="messages-container"
      className="grow my-3 w-full justify-end overflow-auto flex relative"
    >
      <div className="flex flex-col w-full grow justify-end absolute">
        {chatContent.map((Element) => Element)}
      </div>
    </div>
  )
}
