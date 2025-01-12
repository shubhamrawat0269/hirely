import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const AuthButtons = () => {
  return (
    <div className="flex space-x-2">
      <Link to={`/signin`}>
        <Button variant="outline">Signin</Button>
      </Link>
      <Link to={`/signup`}>
        <Button className="bg-teal-500 text-white hover:bg-teal-600">Signup</Button>
      </Link>
    </div>
  )
}

export default AuthButtons
