import logoSvg from '../../assets/images/logo.svg'
import { Button, Div } from './styles';
import { InputForm } from '../../themes/inputs';
import { ButtonForm } from '../../themes/buttons';
import { Link } from 'react-router-dom';
import { ChatCircleDots, ChatsCircle, SignIn } from 'phosphor-react';
import { BackButton } from '../../components/BackButton';



export function EnterRoom() {
    return (
        <Div.container className="min-h-screen mx-auto flex flex-col items-center justify-between">
            <div className="w-full">
                <div className="pt-4 w-full">
                    <BackButton to="/acoes" />
                </div>
                <div className="pt-12"><img src={logoSvg} alt="project-logo" className="mx-auto h-12" /></div>
            </div>

            <div className="w-full self-center grow mt-48">
                
                <div className="flex flex-col items-center">
                    <InputForm name="username" placeholder="Digite o código da sala" moreClasses="mb-5" />
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