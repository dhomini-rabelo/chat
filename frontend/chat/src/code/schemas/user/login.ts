import * as zod from 'zod'
import { ErrorMessages } from '../messages'

export interface LoginSchemaType {
  username: string
  password: string
}

export const LoginSchema = zod.object({
  username: zod.string().min(1, ErrorMessages.REQUIRED),
  password: zod.string().min(1, ErrorMessages.REQUIRED),
})
