import * as zod from 'zod'


export interface RegisterUserSchemaType {
  username: string,
  password: string,
  confirm_password: string,
}

export const RegisterUserSchema = zod.object({
  username: zod.string().max(150, 'Este valor não deve ultrapassar 150 letras'),
  password: zod.string(),
  confirm_password: zod.string(),
});