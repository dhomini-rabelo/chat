import { ReactNode, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'

export function AuthRoute({ Route }: { Route: ReactNode }) {
  const navigateTo = useNavigate()
  const {
    auth: { isAuthenticated },
  } = useContext(AuthContext)

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo('/')
    }
  }, [isAuthenticated, navigateTo])

  return isAuthenticated ? <div>{Route}</div> : <></>
}
