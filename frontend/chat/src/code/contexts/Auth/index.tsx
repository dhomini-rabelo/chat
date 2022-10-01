import { createContext, ReactNode, useReducer } from "react";
import { AuthContextType } from "./types";



export const AuthContext = createContext<AuthContextType>({} as AuthContextType)


export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, authDispatch] = useReducer((state: AuthContextType, action: any) => {
    return state
  }, {
    token: '',
    isAuthenticated: false
  })
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}