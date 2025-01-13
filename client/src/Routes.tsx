import { createBrowserRouter } from 'react-router-dom'
import { Signin, Signup, Home, Jobs, BrowseJobs, Profile } from './pages'

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
  {
    path: '/profile',
    element: <Profile />,
  },
])

export default appRoutes
