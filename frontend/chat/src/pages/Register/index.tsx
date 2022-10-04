import { Button, Form } from './styles';
import { InputForm } from '../../themes/inputs';
import { ButtonForm } from '../../themes/buttons';
import { Link } from 'react-router-dom';
import { RegisterUserSchemaType, RegisterUserSchema } from '../../code/schemas/user/register';
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldErrors, useForm } from 'react-hook-form';
import { BaseSyntheticEvent } from 'react';



export function Register() {
    const registerForm = useForm<RegisterUserSchemaType>({
        resolver: zodResolver(RegisterUserSchema),
    })
    const { handleSubmit, register } = registerForm

    function onValidSubmit(data: RegisterUserSchemaType) {

    }

    function onInvalidSubmit(errors: FieldErrors<RegisterUserSchemaType>, event?: BaseSyntheticEvent) {

    }


    return (
        <Form.container onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)} className="min-h-screen mx-auto">
            <div className="pt-16"><img src="logo.svg" alt="project-logo" className="mx-auto h-12" /></div>
            <h3 className="py-10 text-pBlack-700 text-center"><strong>Cadastro</strong></h3>
            <div className="flex flex-col items-center mb-32 sm:mb-8">
                <input type="text" placeholder="Digite seu username" className="h-14 sm:h-12 d-block mx-auto input-form" {...register('username')} />
                <input type="password" placeholder="Digite sua senha" className="h-14 sm:h-12 d-block mx-auto input-form mt-5" {...register('password')} />
                <input type="password" placeholder="Confirme sua senha" className="h-14 sm:h-12 d-block mx-auto input-form mt-5" {...register('confirm_password')} />
            </div>
            <div className="flex flex-col items-center"><ButtonForm>Cadastrar</ButtonForm></div>
            <span className="block text-center mt-8" id="already">Já tem uma conta ?</span>
            <Link to="/ " id="register-link" className="block text-center mt-1 text-pBlue-300">Entrar</Link>
        </Form.container>
    )
}

