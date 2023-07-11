import { FC } from 'react'
import { navBarItems } from '../../../constants/navBarItems'
import BrandIcon from '@assets/icons/BrandIcon'
import { useNavigate } from 'react-router-dom'
import UserProfile from './UserProfile'
import { SideMenuProps } from '@interfaces/PropTypes'
import { NavbarItem } from '@interfaces/NavbarItem'
import Button from '@components/button/Button'
const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className={`backdrop  backdrop-blur-[5px] z-40 ${
          isOpen ? 'isOpen' : 'isClosed'
        }`}
        onClick={onClose}
      />
      <aside
        className={`menu z-50 ${isOpen ? 'isOpen' : 'isClosed'} py-8 px-4`}
        onClick={onClose}
      >
        <div className="flex-wrap-between-center">
          <BrandIcon
            className="cursor-pointer py-2"
            onClick={() => navigate('/')}
          />
          <UserProfile />
        </div>
        {navBarItems.map((item: NavbarItem) => (
          <div>
            <Button
              title={item.title}
              key={item.title}
              onClickAction={() => navigate(item.path)}
              className="text-secondary"
            />
          </div>
        ))}
      </aside>
    </>
  )
}

export default SideMenu
