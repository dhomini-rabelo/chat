import logoSvg from '../../assets/images/logo.svg'
import { Button, Div } from './styles';


export function Login() {
    return (
        <Div.container className="min-h-screen mx-auto">
            <div className="pt-16"><img src={logoSvg} alt="project-logo" className="mx-auto h-12" /></div>
            <h3 className="py-10 text-pBlack-700 text-center"><strong>Login</strong></h3>
            <Div.inputContainer className="flex flex-col items-center mb-40 sm:mb-8">
                <input type="text" placeholder="Digite seu username" className="h-14 sm:h-12 d-block mx-auto" />
                <input type="password" placeholder="Digite sua senha" className="h-14 sm:h-12 d-block mx-auto mt-5" />
                <a href="#" className="mt-4 ml-8 forgot self-start"><strong>Forgot password?</strong></a>
            </Div.inputContainer>
            <div className="flex flex-col items-center"><button className="d-block text-white py-4 mx-auto">Login</button></div>
            <span className="block text-center mt-8" id="already">Já tem uma conta ?</span>
            <a href="" id="register-link" className="block text-center mt-1">Cadastrar-se</a>
            
        </Div.container>
    )
}