import { Navbar } from '@/components/organisms'
import { createBrowserRouter } from 'react-router-dom'
import { Signin, Signup } from './pages'

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
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
