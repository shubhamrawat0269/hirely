import React from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Loader2 } from 'lucide-react'

import { useSignupFormStore } from '@/store/auth.store'
import { FormField, ActionButton } from '@/components/organisms'
import { Label, RadioGroup, Separator, Input, Button } from '@/components'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_ENDPOINT } from '@/utils/Namespaces/auth.namespace'

const Signup: React.FC = () => {
  const navigate = useNavigate()
  const { loader, formData, handleInputChange, showPassword, setShowPassword, handleFileChange, setLoader } =
    useSignupFormStore()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { fullname, email, phoneNumber, password, file, role } = formData
    const payload = { fullname, email, phoneNumber, password, file, role }

    try {
      setLoader(true)
      const response = await axios.post(`${USER_API_ENDPOINT}/register`, payload)
      // console.log(response)

      if (response.data.success) {
        navigate('/signin')
        toast.success(response.data.message || 'Account Created Successfully')
      }
    } catch (error: any) {
      console.log('FORM SIGNUP Error ', error)
      toast.error(error.response.data.message)
    } finally {
      setLoader(false)
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
                onChange={(e) => handleFileChange(e)}
                className="cursor-pointer"
              />
            </div>
            <div className="flex gap-2 items-center space-y-2 space-x-2">
              <Label className="pt-1.5 text-sm">Role</Label>
              <RadioGroup className="flex space-y-0 space-x-0">
                <div className="flex items-center space-x-2">
                  <Input
                    id="role"
                    type="radio"
                    name="roleType"
                    value={'student'}
                    checked={formData.role === 'student'}
                    onChange={(e) => handleInputChange(e)}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="student">student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    id="role"
                    type="radio"
                    name="roleType"
                    value={'recruiter'}
                    checked={formData.role === 'recruiter'}
                    onChange={(e) => handleInputChange(e)}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="student">recruiter</Label>
                </div>
              </RadioGroup>
            </div>
            {loader ? (
              <Button className="w-full">
                <Loader2 className="animate-spin" size={20} />
                Loading
              </Button>
            ) : (
              <ActionButton text="Sign Up" className="bg-teal-600 hover:bg-teal-700" />
            )}
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
