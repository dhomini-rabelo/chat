import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Actions } from './pages/Actions';
import { Chats } from './pages/Chats';
import { CreateRoom } from './pages/CreateRoom';
import { EnterRoom } from './pages/enterRoom';
import { Login } from './pages/Login'
import { Register } from './pages/Register';




export function RouterController() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/acoes" element={<Actions />} />
                <Route path="/acoes/entrar-na-sala" element={<EnterRoom />} />
                <Route path="/acoes/criar-sala" element={<CreateRoom />} />
            </Routes>
        </BrowserRouter>
    )
}