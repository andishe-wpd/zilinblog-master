import Navbar from '@components/layout/Header/Navbar'
import SearchInput from '@components/SearchInput/SearchInput'
import SearchIcon from '../../../assets/icons/SearchIcon'
import UserProfile from '@components/layout/Header/UserProfile'
const Header = () => {
  return (
    <header className="py-4 px-8 border-b flex-wrap-between-center">
      <Navbar />
      <div className="flex-wrap-between-center gap-4 max-w-[720px] w-full ">
        <SearchInput
          placeholder="search"
          icon={<SearchIcon />}
          className="max-w-[600px] w-full"
        />
        <UserProfile className="hidden sm:block" />
      </div>
    </header>
  )
}

export default Header
