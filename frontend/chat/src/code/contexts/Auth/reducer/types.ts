import { AuthActions } from './actions'

export type AuthReducerAction = {
  type: AuthActions
  payload?: any
}

export interface AuthType {
  token: string
  isAuthenticated: boolean
}
