import { AuthContextType } from '../types'
import { AuthActions } from './actions'
import { AuthReducerAction } from './types'

export function AuthReducer(
  state: AuthContextType,
  action: AuthReducerAction,
): AuthContextType {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        isAuthenticated: true,
        token: action.payload.token,
      }
  }
}
