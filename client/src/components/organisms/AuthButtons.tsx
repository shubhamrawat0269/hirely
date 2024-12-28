import { Button } from '../ui/button'

const AuthButtons = () => {
  return (
    <div className="flex space-x-2">
      <Button variant="outline">Login</Button>
      <Button>Signup</Button>
    </div>
  )
}

export default AuthButtons
