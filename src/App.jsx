import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Actions from './pages/Actions'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Messages from './pages/Messages'
import Teams from './pages/Teams'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/actions",
        element: <Actions />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/messages",
        element: <Messages />
      },
      {
        path: "/teams",
        element: <Teams />
      }
    ]
  },
  
])

function App() {
  

  return (
   
      <RouterProvider router={router} />
    
  )
}

export default App
