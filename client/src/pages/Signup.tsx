import React from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'

import { useSignupFormStore } from '@/store/auth.store'
import { FormField, ActionButton } from '@/components/organisms'
import { Label, RadioGroup, RadioGroupItem, Separator, Input } from '@/components'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

const Signup: React.FC = () => {
  const { role, formData, handleInputChange, showPassword, setShowPassword, handleFileChange } = useSignupFormStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    const { fullname, email, phoneNumber, password, role, file } = formData

    try {
      console.log({ fullname, email, phoneNumber, password, role, file })

      toast.success('Register Successfull')
    } catch (error) {
      console.log('FORM SIGNUP Error ', error)
    }
  }

  return (
    <div className="min-h-screen bg-teal-400 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">Register</h1>
            <p className="text-muted-foreground">Enter your credentials to create account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              label="Full Name"
              id="fullname"
              value={formData.fullname}
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter your name"
            />
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
            <FormField
              label="Phone Number"
              id="phoneNumber"
              value={formData.phoneNumber}
              type="number"
              onChange={(e) => handleInputChange(e)}
              placeholder="Enter your phone number"
            />
            <div className="flex items-center gap-2 space-y-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                id="file"
                type="file"
                value={formData.file}
                onChange={(e) => handleFileChange(e)}
                className="cursor-pointer"
              />
            </div>
            <div className="flex gap-2 items-center space-y-2 space-x-2">
              <Label className="pt-1.5 text-sm">Role</Label>
              <RadioGroup defaultValue="student" className="flex space-y-0 space-x-0">
                {role.map((role) => {
                  return (
                    <div className="flex items-center space-x-2" key={role}>
                      <RadioGroupItem value={role} id={role} />
                      <Label htmlFor={role}>{role}</Label>
                    </div>
                  )
                })}
              </RadioGroup>
            </div>
            <ActionButton text="Sign Up" className="bg-teal-600 hover:bg-teal-700" />
            <Separator />
            <div className="text-center">
              <p>
                Already have account?{' '}
                <Link to={`/signin`} className="text-cyan-700 font-bold">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Signup
