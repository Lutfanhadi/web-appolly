import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style/global.css"
import App from './components/organisms/app'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
