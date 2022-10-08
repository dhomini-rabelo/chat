import { AuthType } from './reducer/types'

export interface AuthContextType {
  auth: AuthType
  actions: {
    login: (username: string, token: string) => void
  }
}
