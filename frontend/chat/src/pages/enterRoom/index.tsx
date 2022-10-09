import { Div } from './styles'
import { ButtonForm } from '../../themes/buttons'
import { SignIn } from 'phosphor-react'
import { BackButton } from '../../components/BackButton'

export function EnterRoom() {
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

      <div className="w-full self-center grow mt-48">
        <div className="flex flex-col items-center form-container-df mx-auto">
          <input
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
    </Div.container>
  )
}
