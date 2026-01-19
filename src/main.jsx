import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CreatePostForm from './CreatePost.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreatePostForm/>
  </StrictMode>,
)
