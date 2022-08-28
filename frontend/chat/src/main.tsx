import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterController } from './router';
import './assets/styles/index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterController />
  </React.StrictMode>
)
