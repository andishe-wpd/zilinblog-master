import { FC, ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { LinkProps } from '@interfaces/PropTypes'

const Link: FC<LinkProps> = ({ className, children, ...rest }) => {
  return (
    <RouterLink className={className} {...rest}>
      {children}
    </RouterLink>
  )
}

export default Link
