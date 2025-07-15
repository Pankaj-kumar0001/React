import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="card-container">
      <App title="Pankaj" text="This is the first card" />
      <App title="Lakshya" text="This is the second card" />
      <App title="Vivek" text="This is the third card" />
    </div>
  </StrictMode>,
)
