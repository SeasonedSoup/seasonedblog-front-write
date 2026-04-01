import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router'

import MainPosts from './components/MainPosts'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import CreatePostForm from './components/CreatePost'
import EditPostList from './components/EditPostList'
import EditPostForm from './components/EditPostForm'
import ViewPosts from './components/ViewPosts'
import DeletePostList from './components/DeletePostList'
import ViewPost from './components/ViewPost'
import { AuthProvider } from './components/AuthToken/AuthProvider'
import "./index.css"

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
  },
  {
    path: "/:id/edit",
    element: <EditPostForm/>
  },
  {
    path: "/edit",
    element: <EditPostList/>
  },
  {
    path: "/view",
    element: <ViewPosts/>
  },
  {
    path: "/delete",
    element: <DeletePostList/>
  },
  {
    path: "/view/:id",
    element:  <ViewPost/>
  }


])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
