import React, { FC, ReactNode } from 'react'

interface FormFieldProps {
  label: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
  required?: boolean
  children?: ReactNode
}

const FormField: FC<FormFieldProps> = ({
  label,
  id,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  required = false,
  children,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className={children ? 'relative' : ''}>
        <input
          id={id}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          required={required}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {children}
      </div>
    </div>
  )
}

export default FormField
