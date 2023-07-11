import Logout from '@assets/icons/Logout'
import MoreDotIcon from '@assets/icons/MoreDotIcon'
import ProfileIcon from '@assets/icons/ProfileIcon'
import SettingIcon from '@assets/icons/SettingIcon'
import ZapIcon from '@assets/icons/ZapIcon'
import Button from '@components/button/Button'
import React, { useState } from 'react'
import profileStore from '../../../store/profileStore'
import LoginModal from '@components/login/LoginModal'
const MenuButton = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleMouseLeave = () => {
    setMenuOpen(false)
  }
  const { avatar, name, clearUser, authenticated } = profileStore(
    state => state,
  )

  const logoutHandler = () => {
    handleMouseLeave()
    clearUser()
    localStorage.removeItem('token')
  }

  return (
    <div className="relative flex-wrap-between-center my-4  pb-4 border-b">
      <div className="font-semibold">Recent posts</div>
      <div className="relative">
        <Button icon={<MoreDotIcon />} onClickAction={handleButtonClick} />
        {isMenuOpen && authenticated ? (
          <div
            className="absolute bg-white border border-gray-300 gap-2 p-2 flex flex-col z-40 right-2 w-[240px] rounded-lg"
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative flex gap-2 border-b py-3 px-2">
              <img
                width={50}
                className="rounded-full min-h-[50px]"
                src={avatar}
              />
              <div>
                <div>{name}</div>
                <div className="text-sm text-textSecondary">
                  olivia@untitledui.com
                </div>
              </div>
            </div>
            <Button icon={<ProfileIcon />} title="View profile" />
            <Button icon={<SettingIcon />} title="Settings" />
            <Button icon={<ZapIcon />} title="Keyboard shortcuts" />
            <Button
              onClickAction={logoutHandler}
              icon={<Logout />}
              title="Log out"
            />
          </div>
        ) : null}

        <LoginModal isOpen={isMenuOpen && !authenticated} setIsOpen={setMenuOpen} />
      </div>
    </div>
  )
}

export default MenuButton
