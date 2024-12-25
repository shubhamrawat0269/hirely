import React from 'react'
import { Button } from '@/components'
type ButtonProps = {
  text?: string
  icon?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  onClick?: () => void
}

const ActionButton: React.FC<ButtonProps> = ({ text, icon, variant = 'primary', disabled = false, onClick }) => {
  if (!text && !icon) {
    console.warn("Button requires at least 'text' or 'icon'.")
    return null
  }

  return (
    <div className="flex justify-center">
      <Button className={`w-full ${variant}`} disabled={disabled} onClick={onClick}>
        {icon && <span className="icon-button__icon">{icon}</span>}
        {text && <span className="icon-button__text">{text}</span>}
      </Button>
    </div>
  )
}

export default ActionButton
