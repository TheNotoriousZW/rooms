
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Actions from './pages/action/Actions'
import Home from './pages/Home'
import Projects from './pages/project/Projects'
import Messages from './pages/messages/Messages'
import Teams from './pages/teams/Teams'
import './index.css'
import { NavProvider } from './context/NavProvider'
import CreateProject from './pages/project/CreateProject'


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
        element: <Projects />,
        children: [
          {
            path: "/projects/create",
            element: <CreateProject />
          }
        ]
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
    <NavProvider>
      <RouterProvider router={router} />
    </NavProvider>
    
  )
}

export default App
