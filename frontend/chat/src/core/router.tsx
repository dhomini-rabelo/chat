import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthRoute } from '../code/utils/AuthRouter'
import { Actions } from '../pages/Actions'
import { Chats } from '../pages/Chats'
import { CreateChat } from '../pages/CreateChat'
import { EnterChat } from '../pages/EnterChat'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Chat } from '../pages/Chat'

export function RouterController() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/chats" element={<AuthRoute Route={<Chats />} />} />
        <Route path="/chat" element={<AuthRoute Route={<Chat />} />} />
        <Route path="/acoes" element={<AuthRoute Route={<Actions />} />} />
        <Route
          path="/acoes/entrar-no-chat"
          element={<AuthRoute Route={<EnterChat />} />}
        />
        <Route
          path="/acoes/criar-chat"
          element={<AuthRoute Route={<CreateChat />} />}
        />
      </Routes>
    </BrowserRouter>
  )
}
