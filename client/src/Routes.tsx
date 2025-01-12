import { createBrowserRouter } from 'react-router-dom'
import { Signin, Signup, Home } from './pages'

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
])

export default appRoutes
