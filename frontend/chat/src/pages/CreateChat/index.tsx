import { Form } from './styles'
import { ButtonForm } from '../../themes/buttons'
import { ChatCircleDots, PencilSimple, User } from 'phosphor-react'
import { BackButton } from '../../components/BackButton'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { useFeedback } from '../../code/hooks/useFeedback'
import { client } from '../../core/settings'
import { useNavigate } from 'react-router-dom'

interface FileEventTarget extends ChangeEvent<HTMLInputElement> {
  currentTarget: HTMLInputElement & EventTarget
  files: FileList
}

export function CreateChat() {
  const navigateTo = useNavigate()
  const { FeedbackElement, renderFeedback } = useFeedback()
  const inputFile = useRef<null | HTMLInputElement>(null)
  const [chatImageBase64, setChatImageBase64] = useState<string>('')

  function handleChatImage() {
    inputFile.current!.click()
  }

  function onInputFileChanged(e: FileEventTarget) {
    const eventInputFile = e.currentTarget
    if (eventInputFile.files!.length <= 0) return

    const reader = new FileReader()

    reader.onload = () => {
      setChatImageBase64(reader.result as string)
    }

    reader.readAsDataURL(eventInputFile.files![0])
  }

  function handleCreateChat(e: FormEvent) {
    e.preventDefault()
    if (chatImageBase64) {
      client
        .post('create-chat', {
          image: chatImageBase64,
        })
        .then((response) => {
          renderFeedback('success', 'Chat criado com sucesso', () => {
            navigateTo(`/chat/${response.data.code}`)
          })
        })
        .catch(() => {
          renderFeedback('error', 'Server Error')
        })
    } else {
      renderFeedback('error', 'Selecione uma imagem')
    }
  }

  return (
    <>
      {FeedbackElement}
      <Form.container
        className="min-h-screen mx-auto flex flex-col items-center justify-between"
        onSubmit={handleCreateChat}
      >
        <div className="w-full">
          <div className="pt-4 w-full">
            <BackButton to="/acoes" />
          </div>
          <div className="pt-12">
            <img src="/logo.svg" alt="project-logo" className="mx-auto h-12" />
            <input
              ref={inputFile}
              onChange={onInputFileChanged}
              type="file"
              accept="image/*"
              name="chat-image"
              id="chat-image"
              className="hidden"
            />
          </div>
        </div>
        <div className="w-full self-center grow mt-16">
          <div className="flex flex-col items-center">
            {chatImageBase64 ? (
              <img
                src={chatImageBase64}
                onClick={handleChatImage}
                alt="chat-image-preview"
                className="relative img-container flex flex-col items-center justify-center rounded-full h-48 w-48 mb-5"
              />
            ) : (
              <div
                className="relative img-container flex flex-col items-center justify-center rounded-full h-48 w-48 bg-pGray-300 mb-5"
                onClick={handleChatImage}
              >
                <User size={48} />
                <span className="absolute bottom-0 right-0 rounded-full bg-pBlue-300 h-12 w-12 flex flex-col items-center justify-center text-pGray-100">
                  <PencilSimple size={24} />
                </span>
              </div>
            )}
            <ButtonForm>
              <span>
                <ChatCircleDots size={24} className="inline" /> Criar
              </span>
            </ButtonForm>
          </div>
        </div>
      </Form.container>
    </>
  )
}
