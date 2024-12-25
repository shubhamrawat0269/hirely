import React from 'react'
import { create } from 'zustand'

// Define the state types
interface FormData {
  fullname: string
  email: string
  password: string
  phoneNumber: string
}

// Define the store with actions
interface FormStore {
  formData: FormData
  role: string[]
  showPassword: boolean
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setShowPassword: (show: boolean) => void
}

const useFormStore = create<FormStore>((set) => ({
  formData: {
    fullname: '',
    email: '',
    password: '',
    phoneNumber: '',
  },
  showPassword: false,
  role: ['student', 'recruiter'],

  handleInputChange: (e) => {
    const { id, value } = e.target
    set((state) => ({
      formData: { ...state.formData, [id]: value },
    }))
  },
  setShowPassword: (show) => {
    set(() => ({
      showPassword: show,
    }))
  },
}))

export default useFormStore
