import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chats } from './pages/Chats';
import { Login } from './pages/Login'
import { Register } from './pages/Register';




export function RouterController() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/chats" element={<Chats />} />
            </Routes>
        </BrowserRouter>
    )
}