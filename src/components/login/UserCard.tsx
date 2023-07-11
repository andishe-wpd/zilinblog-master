import Button from '@components/button/Button'
import { FC } from 'react'
import profileStore from '../../store/profileStore'

const UserCard: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { clearUser } = profileStore()

  const logoutHandler = () => {
    onClose()
    clearUser()
    localStorage.removeItem('token')
  }
  return (
    <div className="min-h-[400px] bg-white w-[400px] flex flex-col justify-center gap-6 rounded-lg p-10">
      <img src="" alt="" />
      <Button
        title={'Logout'}
        className="flex justify-center "
        onClickAction={logoutHandler}
      />
    </div>
  )
}

export default UserCard
