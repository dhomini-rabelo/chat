import { Form } from './styles'
import { ButtonForm } from './../../themes/buttons'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { LoginSchema, LoginSchemaType } from '../../code/schemas/user/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '@hookform/error-message'
import { ErrorSpan } from '../../components/ErrorSpan'
import { client } from '../../core/settings'
import { useFeedback } from '../../code/hooks/useFeedback'
import { useContext } from 'react'
import { AuthContext } from '../../code/contexts/Auth'

export function Login() {
  const {
    actions: { login },
  } = useContext(AuthContext)
  const navigateTo = useNavigate()
  const { FeedbackElement, renderFeedback } = useFeedback()
  const loginForm = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = loginForm

  function onValidForm(data: LoginSchemaType) {
    client
      .post('get-token', data)
      .then((response) => {
        login(data.username, response.data.access)
        navigateTo('/chats')
      })
      .catch((error) => {
        const ErrorMessageData: Array<string[]> = Object.values(
          error.response.data,
        )
        const ErrorMessage: string = ErrorMessageData[0][0]
        renderFeedback('error', ErrorMessage)
      })
  }

  return (
    <>
      {FeedbackElement}
      <Form.container
        className="min-h-screen mx-auto"
        onSubmit={handleSubmit(onValidForm)}
      >
        <div className="pt-16">
          <img src="logo.svg" alt="project-logo" className="mx-auto h-12" />
        </div>
        <h3 className="py-10 text-pBlack-700 text-center">
          <strong>Login</strong>
        </h3>
        <div className="form-container-df mx-auto">
          <div className="flex flex-col items-center mb-40 sm:mb-8">
            <div className="w-full input-field">
              <input
                type="text"
                placeholder="Digite seu username"
                className="w-full h-14 sm:h-12 d-block mx-auto input-form"
                {...register('username')}
              />
              <ErrorMessage
                errors={errors}
                name="username"
                render={({ message }) => <ErrorSpan message={message} />}
              />
            </div>
            <div className="w-full input-field mt-3">
              <input
                type="password"
                placeholder="Digite sua senha"
                className="w-full h-14 sm:h-12 d-block mx-auto input-form"
                {...register('password')}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <ErrorSpan message={message} />}
              />
            </div>
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
      </Form.container>
    </>
  )
}
