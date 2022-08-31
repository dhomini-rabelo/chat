import logoSvg from '../../assets/images/logo.svg'
import { Button, Div } from './styles';
import { InputForm } from './../../themes/inputs';
import { ButtonForm } from './../../themes/buttons';


export function Login() {
    return (
        <Div.container className="min-h-screen mx-auto">
            <div className="pt-16"><img src={logoSvg} alt="project-logo" className="mx-auto h-12" /></div>
            <h3 className="py-10 text-pBlack-700 text-center"><strong>Login</strong></h3>
            <div className="flex flex-col items-center mb-40 sm:mb-8">
                <InputForm name="username" placeholder="Digite seu username" />
                <InputForm name="password" type="password" moreClasses="mt-5" placeholder="Digite sua senha" />
                <a href="#" className="mt-4 ml-8 forgot self-start"><strong>Forgot password?</strong></a>
            </div>
            <div className="flex flex-col items-center"><ButtonForm>Entrar</ButtonForm></div>
            <span className="block text-center mt-8" id="already">Já tem uma conta ?</span>
            <a href="" id="register-link" className="block text-center mt-1">Cadastrar-se</a>
        </Div.container>
    )
}