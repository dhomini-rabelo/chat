import { Div } from './styles'
import { ButtonForm } from '../../themes/buttons'
import { ChatCircleDots, PencilSimple, User } from 'phosphor-react'
import { BackButton } from '../../components/BackButton'

export function CreateRoom() {
  return (
    <Div.container className="min-h-screen mx-auto flex flex-col items-center justify-between">
      <div className="w-full">
        <div className="pt-4 w-full">
          <BackButton to="/acoes" />
        </div>
        <div className="pt-12">
          <img src="/logo.svg" alt="project-logo" className="mx-auto h-12" />
        </div>
      </div>

      <div className="w-full self-center grow mt-16">
        <div className="flex flex-col items-center">
          <div className="relative img-container flex flex-col items-center justify-center rounded-full h-48 w-48 bg-pGray-300 mb-5">
            <User size={48} />
            <span className="absolute bottom-0 right-0 rounded-full bg-pBlue-300 h-12 w-12 flex flex-col items-center justify-center text-pGray-100">
              <PencilSimple size={24} />
            </span>
          </div>
          <ButtonForm>
            <span>
              <ChatCircleDots size={24} className="inline" /> Criar
            </span>
          </ButtonForm>
        </div>
      </div>
    </Div.container>
  )
}
