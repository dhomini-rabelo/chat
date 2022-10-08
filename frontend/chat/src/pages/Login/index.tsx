import { Div } from './styles'
import { ButtonForm } from './../../themes/buttons'
import { Link } from 'react-router-dom'

export function Login() {
  return (
    <Div.container className="min-h-screen mx-auto">
      <div className="pt-16">
        <img src="logo.svg" alt="project-logo" className="mx-auto h-12" />
      </div>
      <h3 className="py-10 text-pBlack-700 text-center">
        <strong>Login</strong>
      </h3>
      <div className="form-container-df mx-auto">
        <div className="flex flex-col items-center mb-40 sm:mb-8">
          <input
            type="text"
            placeholder="Digite seu username"
            className="w-full h-14 sm:h-12 d-block mx-auto input-form"
            name="username"
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full h-14 sm:h-12 d-block mx-auto input-form mt-5"
          />
        </div>
        <div className="flex flex-col items-center">
          <ButtonForm>Entrar</ButtonForm>
        </div>
      </div>
      <span className="block text-center mt-8" id="already">
        Já cadastrou uma conta ?
      </span>
      <Link
        to="/cadastro"
        id="register-link"
        className="block text-center mt-1 text-pBlue-300"
      >
        Cadastrar-se
      </Link>
    </Div.container>
  )
}
