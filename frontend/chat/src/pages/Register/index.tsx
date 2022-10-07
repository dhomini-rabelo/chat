import { Form } from './styles'
import { ButtonForm } from '../../themes/buttons'
import { Link, useNavigate } from 'react-router-dom'
import {
  RegisterUserSchemaType,
  RegisterUserSchema,
} from '../../code/schemas/user/register'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useFeedback } from '../../code/hooks/useFeedback'
import { client } from '../../core/settings'

export function Register() {
  const navigateTo = useNavigate()
  const { FeedbackElement, renderFeedback } = useFeedback()
  const registerForm = useForm<RegisterUserSchemaType>({
    resolver: zodResolver(RegisterUserSchema),
  })
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = registerForm

  async function onValidSubmit(data: RegisterUserSchemaType) {
    client
      .post('create-user', data)
      .then((response) => {
        renderFeedback('success', 'Usuário criado com sucesso', () => {
          navigateTo('/')
        })
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
        onSubmit={handleSubmit(onValidSubmit)}
        className="min-h-screen mx-auto"
      >
        <div className="pt-16">
          <img src="logo.svg" alt="project-logo" className="mx-auto h-12" />
        </div>
        <h3 className="py-10 text-pBlack-700 text-center">
          <strong>Cadastro</strong>
        </h3>
        <div className="form-container-df mx-auto">
          <div className="flex flex-col items-center mb-32 sm:mb-8 w-full">
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
                render={({ message }) => (
                  <span className="w-full text-red-500 mx-auto text-xs h-3 mt-1 pl-2 span-error">
                    {message}
                  </span>
                )}
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
                render={({ message }) => (
                  <span className="w-full text-red-500 mx-auto text-xs h-3 mt-1 pl-2 span-error">
                    {message}
                  </span>
                )}
              />
            </div>
            <div className="w-full input-field mt-3">
              <input
                type="password"
                placeholder="Confirme sua senha"
                className="w-full h-14 sm:h-12 d-block mx-auto input-form"
                {...register('confirm_password')}
              />
              <ErrorMessage
                errors={errors}
                name="confirm_password"
                render={({ message }) => (
                  <span className="w-full text-red-500 mx-auto text-xs h-3 mt-1 pl-2 span-error">
                    {message}
                  </span>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <ButtonForm>Cadastrar</ButtonForm>
          </div>
        </div>
        <span className="block text-center mt-8" id="already">
          Já tem uma conta ?
        </span>
        <Link
          to="/ "
          id="register-link"
          className="block text-center mt-1 text-pBlue-300"
        >
          Entrar
        </Link>
      </Form.container>
    </>
  )
}
