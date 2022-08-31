import logoSvg from '../../assets/images/logo.svg'
import { Button, Div } from './styles';
import { InputForm } from '../../themes/inputs';
import { ButtonForm } from '../../themes/buttons';
import { Link } from 'react-router-dom';


export function Register() {
    return (
        <Div.container className="min-h-screen mx-auto">
            <div className="pt-16"><img src={logoSvg} alt="project-logo" className="mx-auto h-12" /></div>
            <h3 className="py-10 text-pBlack-700 text-center"><strong>Cadastro</strong></h3>
            <div className="flex flex-col items-center mb-32 sm:mb-8">
                <InputForm name="name" placeholder="Digite seu nome" />
                <InputForm name="username" moreClasses="mt-5" placeholder="Digite seu username" />
                <InputForm name="password" type="password" moreClasses="mt-5" placeholder="Digite sua senha" />
            </div>
            <div className="flex flex-col items-center"><ButtonForm>Cadastrar</ButtonForm></div>
            <span className="block text-center mt-8" id="already">Já tem uma conta ?</span>
            <Link to="/ " id="register-link" className="block text-center mt-1">Entrar</Link>
        </Div.container>
    )
}