import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router'

import MainPosts from './components/MainPosts'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

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

])
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
