import logo from '../../assets/images/logo.png';
import Nav from '../ui/Nav';
import Search from '../ui/Search';
import { Link, NavLink } from 'react-router-dom';
import Cart from '../ui/Cart';
import LoginUser from '../ui/LoginUser';
import { mainLinks } from '../../constants/navigationData';


const Header = () => {
  return (
    <header className="bg-white shadow-md py-3 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Nav links={mainLinks} ulClass="hidden lg:flex gap-x-5" linkClass="text-gray-600 hover:text-cyan-600" />

          <Search />
          <div className="flex items-center gap-x-5">
            <Cart />
            <LoginUser />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
