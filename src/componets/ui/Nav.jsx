import { NavLink } from 'react-router-dom';

const Nav = ({ navClass, ulClass, linkClass }) => {
  return (
    <nav>
      <ul className={ulClass}>
        <li>
          <NavLink className={({ isActive }) => ` transition-all duration-300 ${isActive ? 'text-cyan-600' : linkClass}`} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => ` transition-all duration-300 ${isActive ? 'text-cyan-600' : linkClass}`} to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => ` transition-all duration-300 ${isActive ? 'text-cyan-600' : linkClass}`} to="/categories">Categories</NavLink>
        </li >
        <li>
          <NavLink className={({ isActive }) => ` transition-all duration-300 ${isActive ? 'text-cyan-600' : linkClass}`} to="/contact">Contact</NavLink>
        </li >
      </ul >
    </nav >
  )
}

export default Nav
