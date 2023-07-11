import { ReactNode } from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

export interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export interface PostImageProps {
  picture: string
  className?: string
}

export interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

export interface CustomInputProps {
  icon?: ReactNode
  placeholder?: string
  onEnter?: () => void
  className?: string
}

export interface LinkProps extends RouterLinkProps {
  className?: string
  children: ReactNode
}

export interface ButtonProps {
  title?: string | number
  icon?: React.ReactNode
  className?: string
  isActive?: boolean
  onClickAction?: any
  disabled?: boolean
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}


