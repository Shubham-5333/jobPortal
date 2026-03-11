import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Profile.jsx'

// import Sidebar from './pages/Sidebar.jsx'
// import Navbar from '../src/pages/Navbar.jsx'
// import UserLogin from './pages/UserLogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
