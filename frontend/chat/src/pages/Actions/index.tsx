import { Div } from './styles'
import { ButtonForm } from '../../themes/buttons'
import { Link } from 'react-router-dom'
import { ChatCircleDots, SignIn } from 'phosphor-react'
import { BackButton } from '../../components/BackButton'

export function Actions() {
  return (
    <Div.container className="min-h-screen mx-auto flex flex-col items-center justify-between">
      <div className="w-full">
        <div className="pt-4 w-full">
          <BackButton to="/chats" />
        </div>
        <div className="pt-12">
          <img src="/logo.svg" alt="project-logo" className="mx-auto h-12" />
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1525770041010-2a1233dd8152?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxjaGF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="chat-app-image"
        className="mx-auto block rounded-full h-64 w-64"
      />

      <div className="w-full mb-4">
        <div className="flex flex-col items-center mb-2">
          <ButtonForm>
            <Link to="/acoes/criar-chat">
              <span>
                <ChatCircleDots size={24} className="inline" /> Criar um chat
              </span>
            </Link>
          </ButtonForm>
        </div>
        <div className="flex flex-col items-center">
          <ButtonForm>
            <Link to="/acoes/entrar-no-chat">
              <SignIn size={24} className="inline" /> Entrar no chat
            </Link>
          </ButtonForm>
        </div>
      </div>
    </Div.container>
  )
}
