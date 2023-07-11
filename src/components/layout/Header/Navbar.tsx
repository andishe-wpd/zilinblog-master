import BrandIcon from '@assets/icons/BrandIcon'
import HamburgerIcon from '@assets/icons/HamburgerIcon'
import Button from '@components/button/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { navBarItems } from '../../../constants/navBarItems'
import SideMenu from './SideMenu '
const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const navigate = useNavigate()
  const handleHamburgerClick = () => {
    setIsSideMenuOpen(!isSideMenuOpen)
  }
  return (
    <nav className="flex-wrap-between-center gap-4 w-full sm:w-auto my-4 sm:my-auto">
      <div className="cursor-pointer" onClick={() => navigate('/')}>
        <BrandIcon />
      </div>
      <div className="hidden sm:flex">
        {navBarItems.map(itm => (
          <Button
            title={itm.title}
            key={itm.title}
            onClickAction={() => navigate(itm.path)}
            className="text-secondary"
          />
        ))}
      </div>
      <div
        className="block sm:hidden cursor-pointer"
        onClick={handleHamburgerClick}
      >
        <HamburgerIcon />
      </div>
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />
    </nav>
  )
}

export default Navbar
