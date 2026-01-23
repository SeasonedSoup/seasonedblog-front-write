import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignUpForm />
  </StrictMode>,
)
