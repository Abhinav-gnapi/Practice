import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Footer.jsx'
import DateGreeter from './DateGreeter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer/>
    <DateGreeter />
  </StrictMode>,
)
