import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'




export function RouterController() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}