import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button, Input, Checkbox, Label, RadioGroup, RadioGroupItem, Separator } from '@/components'
import { Eye, EyeOff, Github, Mail } from 'lucide-react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [role] = useState(['student', 'recruiter'])

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">Welcome back</h1>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="rawatshubam269@gmail.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="flex gap-2 items-center space-y-2 space-x-2">
              <Label className="pt-1.5 text-sm">Role</Label>
              <RadioGroup defaultValue="student" className="flex space-y-0 space-x-0">
                {role.map((role) => {
                  return (
                    <div className="flex items-center space-x-2" key="role">
                      <RadioGroupItem value={role} id={role} />
                      <Label htmlFor={role}>{role}</Label>
                    </div>
                  )
                })}
              </RadioGroup>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-primary-500 hover:text-primary-600">
                Forgot password?
              </a>
            </div>
            <div className="flex justify-center">
              <Button className="w-full">Sign In</Button>
            </div>
            <Separator />
            <div className="flex justify-center space-x-2">
              <Button className="w-full bg-transparent text-black border-2 border-gray-100 hover:bg-transparent">
                <Github size={20} />
                Github
              </Button>
              <Button className="w-full bg-transparent text-black border-2 border-gray-100 hover:bg-transparent">
                <Mail size={20} />
                Google
              </Button>
            </div>
            <div className="text-center">
              <p>
                Don't have an account?{' '}
                <a href="#" className="text-cyan-700 font-bold">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
