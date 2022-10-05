import * as zod from 'zod'


export interface RegisterUserSchemaType {
  username: string,
  password: string,
  confirm_password: string,
}

export const RegisterUserSchema = zod.object({
  username: zod.string().min(1, 'Este campo é obrigatório').max(150, 'Limite de 150 letras excedido'),
  password: zod.string().min(8, 'Este campo deve ter no mínimo 8 dígitos'),
  confirm_password: zod.string().min(1, 'Este campo é obrigatório'),
}).refine((data) => data.password === data.confirm_password, {
  message: "As senhas são diferentes",
  path: ["confirm_password"], // path of error
})