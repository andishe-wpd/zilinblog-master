import Modal from '@components/modal/Modal'
import LoginForm from './LoginForm'
import { FC } from 'react'
import profileStore from '../../store/profileStore'
import UserCard from './UserCard'
const LoginModal: FC<{ isOpen: boolean; setIsOpen: (e: boolean) => void }> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <LoginForm onClose={() => setIsOpen(false)} />
    </Modal>
  )
}

export default LoginModal
