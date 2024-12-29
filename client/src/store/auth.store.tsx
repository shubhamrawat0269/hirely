import React from 'react'
import { create } from 'zustand'

// Define the state types
interface SignupFormData {
  fullname: string
  email: string
  file: string
  password: string
  phoneNumber: string
}

interface SigninFormData {
  email: string
  password: string
}

// Define the store with actions
interface SignupFormStore {
  formData: SignupFormData
  role: string[]
  showPassword: boolean
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setShowPassword: (show: boolean) => void
}

// Define the store with actions
interface SigninFormStore {
  formData: SigninFormData
  role: string[]
  showPassword: boolean
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setShowPassword: (show: boolean) => void
}

const useSignupFormStore = create<SignupFormStore>((set) => ({
  formData: {
    fullname: '',
    email: '',
    file: '',
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
  handleFileChange: (e) => {
    const { id, files } = e.target
    set((state) => ({
      formData: { ...state.formData, [id]: files?.[0] },
    }))
  },
  setShowPassword: (show) => {
    set(() => ({
      showPassword: show,
    }))
  },
}))

const useSigninFormStore = create<SigninFormStore>((set) => ({
  /* ``````````` State below ```````````` */
  formData: {
    email: '',
    password: '',
  },
  showPassword: false,
  role: ['student', 'recruiter'],

  /* ``````````` Actions below ```````````` */

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

export { useSignupFormStore, useSigninFormStore }
