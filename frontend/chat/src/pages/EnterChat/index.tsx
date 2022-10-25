import { Form } from './styles'
import { ButtonForm } from '../../themes/buttons'
import { SignIn } from 'phosphor-react'
import { BackButton } from '../../components/BackButton'
import { client } from '../../core/settings'
import { FormEvent, useRef } from 'react'
import { useFeedback } from '../../code/hooks/useFeedback'
import { useNavigate } from 'react-router-dom'

export function EnterChat() {
  const navigateTo = useNavigate()
  const { FeedbackElement, renderFeedback } = useFeedback()
  const inputRef = useRef<null | HTMLInputElement>(null)

  function handleEnterChat(e: FormEvent) {
    e.preventDefault()
    const chatCodeRegex = /^[a-zA-Z]{2}-\d{3}$/gi

    if (!inputRef.current!.value) {
      renderFeedback('error', 'Preencha o código do chat')
    } else if (!inputRef.current!.value.match(chatCodeRegex)) {
      renderFeedback('error', 'Formato de código inválido, use AA-000')
    } else {
      const chatCode = inputRef.current!.value.slice()
      client
        .post(`register-user-in-chat/${chatCode}`)
        .then((response) => {
          renderFeedback('success', 'Sucesso', () => {
            navigateTo(`/chat/${chatCode}`)
          })
        })
        .catch((error) => {
          renderFeedback('error', error.response.data.Message)
        })
    }
  }

  return (
    <Form.container
      className="min-h-screen mx-auto flex flex-col items-center justify-between"
      onSubmit={handleEnterChat}
    >
      {FeedbackElement}
      <div className="w-full">
        <div className="pt-4 w-full">
          <BackButton to="/acoes" />
        </div>
        <div className="pt-12">
          <img src="/logo.svg" alt="project-logo" className="mx-auto h-12" />
        </div>
      </div>

      <div className="w-full self-center grow mt-48 max-w-sm mx-auto">
        <div className="flex flex-col items-center form-container-df mx-auto">
          <input
            ref={inputRef}
            type="text"
            placeholder="Digite o código do chat"
            className="w-full h-14 sm:h-12 d-block mx-auto input-form mb-5"
          />
          <ButtonForm>
            <span>
              <SignIn size={24} className="inline" /> Entrar
            </span>
          </ButtonForm>
        </div>
      </div>
    </Form.container>
  )
}
