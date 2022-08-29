import logoSvg from '../../assets/images/logo.svg'
import { Button, Div } from './styles';


export function Login() {
    return (
        <div className="min-h-screen bg-pGray-200 flex flex-col justify-between items-center">
            <div className="pt-40"><img src={logoSvg} alt="project-logo" className="mx-auto" /></div>
            <div className="pb-48 flex flex-col justify-between items-center w-full">
                <Button.login className="py-5 w-4/5 mx-6">
                    Login com Google
                </Button.login>
                <Div.or className="flex items-center justify-between w-4/5 py-7">
                    <div className="line grow ml-6"></div>
                    <span className="px-5">or</span>
                    <div className="line grow mr-6"></div>
                </Div.or>
                <Button.login className="py-5 w-4/5 mx-6">
                    Login com Apple
                </Button.login>
            </div>
        </div>
    )
}