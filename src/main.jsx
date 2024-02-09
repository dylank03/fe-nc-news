import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
  <NextUIProvider className = "dark text-foreground bg-background">
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </NextUIProvider>
  </UserProvider>
)
