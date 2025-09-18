import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormContainer from './form-holder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormContainer />
  </StrictMode>,
)
