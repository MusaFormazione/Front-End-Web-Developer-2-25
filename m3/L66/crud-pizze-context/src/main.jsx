import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PizzaProvider } from './contexts/PizzaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PizzaProvider>
      <App />
    </PizzaProvider>
  </StrictMode>,
)
