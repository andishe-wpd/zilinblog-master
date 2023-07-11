import { FC } from 'react'
import { ButtonProps } from '@interfaces/PropTypes'

const Button: FC<ButtonProps> = ({
  title,
  icon,
  className,
  isActive = false,
  onClickAction,
  disabled = false,
}) => {
  return (
    <button
      type="submit"
      className={`custom-button p-3  ${className} ${
        isActive ? 'text-primary bg-blue-50' : ''
      } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
      onClick={() => {
        if (!disabled && onClickAction) onClickAction()
      }}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {title}
    </button>
  )
}

export default Button
