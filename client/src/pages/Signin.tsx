import { motion } from 'framer-motion'
import { useSigninFormStore } from '@/store/auth.store'

import { FormField, ActionButton } from '@/components/organisms'
import { Button, Checkbox, Label, RadioGroup, RadioGroupItem, Separator } from '@/components'
import { Eye, EyeOff, Github, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Signin = () => {
  const { role, formData, handleInputChange, showPassword, setShowPassword } = useSigninFormStore()

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
            <FormField
              label="Email"
              id="email"
              value={formData.email}
              type="email"
              onChange={(e) => handleInputChange(e)}
              placeholder="rawatshubam269@gmail.com"
            />
            <FormField
              label="Password"
              id="password"
              value={formData.password}
              onChange={(e) => handleInputChange(e)}
              type={showPassword ? 'text' : 'password'}
              required
            >
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </FormField>
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
            <ActionButton text="Sign In" onClick={() => alert('Button clicked')} />
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
                <Link to={`/signup`} className="text-cyan-700 font-bold">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Signin
