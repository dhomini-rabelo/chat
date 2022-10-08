import { createContext, ReactNode, useReducer } from 'react'
import { client } from '../../../core/settings'
import { AuthReducer } from './reducer'
import { AuthConsumer } from './reducer/actions'
import { AuthContextType } from './types'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, authDispatch] = useReducer(AuthReducer, {
    token: '',
    isAuthenticated: false,
    username: '',
  })

  function login(username: string, token: string) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`
    authDispatch(AuthConsumer.login(username, token))
  }

  return (
    <AuthContext.Provider value={{ auth, actions: { login } }}>
      {children}
    </AuthContext.Provider>
  )
}
