import { createBrowserRouter } from 'react-router-dom'
import { Signin, Signup, Home, Jobs, BrowseJobs } from './pages'

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
  {
    path: '/jobs',
    element: <Jobs />,
  },
  {
    path: '/browse',
    element: <BrowseJobs />,
  },
])

export default appRoutes
