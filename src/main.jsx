import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router'

import MainPosts from './components/MainPosts'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import CreatePostForm from './components/CreatePost'
import { AuthProvider } from './components/AuthToken/AuthProvider'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPosts/>
  },
  {
    path: "/login",
    element: <LoginForm/>
  },
  {
    path: "/signup",
    element: <SignUpForm/>
  },
  {
    path: "/post",
    element: <CreatePostForm/>
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
