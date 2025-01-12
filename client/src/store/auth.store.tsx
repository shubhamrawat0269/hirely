import React from 'react'
import { create } from 'zustand'

// Define the state types
interface SignupFormData {
  fullname: string
  email: string
  file: string
  password: string
  phoneNumber: string
  role: string
}

interface SigninFormData {
  email: string
  password: string
  role: string
}

// Define the store with actions
interface SignupFormStore {
  formData: SignupFormData
  role: string[]
  loader: boolean
  showPassword: boolean
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setShowPassword: (show: boolean) => void
}

// Define the store with actions
interface SigninFormStore {
  formData: SigninFormData
  role: string[]
  loader: boolean
  showPassword: boolean
  userData: any
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setShowPassword: (show: boolean) => void
  setLoader: (show: boolean) => void
  setUserData: (show: boolean) => void
}

const useSignupFormStore = create<SignupFormStore>((set) => ({
  formData: {
    fullname: '',
    email: '',
    file: '',
    role: 'student',
    password: '',
    phoneNumber: '',
  },
  loader: false,
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
    console.log({ id, files })
    set((state) => ({
      formData: { ...state.formData, [id]: files?.[0] },
    }))
  },
  setShowPassword: (show) => {
    set(() => ({
      showPassword: show,
    }))
  },
  setLoader: (show) => {
    set(() => ({
      loader: show,
    }))
  },
}))

const useSigninFormStore = create<SigninFormStore>((set) => ({
  /* ``````````` State below ```````````` */
  formData: {
    email: '',
    role: '',
    password: '',
  },
  userData: null,
  loader: false,
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
  setLoader: (show) => {
    set(() => ({
      loader: show,
    }))
  },
  setUserData: (payload) => {
    set(() => ({
      userData: payload,
    }))
  },
}))

export { useSignupFormStore, useSigninFormStore }
