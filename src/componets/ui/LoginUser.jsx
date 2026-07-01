import { FaUserCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const LoginUser = () => {
  return (
    <>
      {/* <NavLink className="text-gray-600 hover:text-cyan-600 transition-all duration-300 text-xl" to="/profile">
        <FaUserCircle />
      </NavLink> */}

      <NavLink className={({ isActive }) => `transition-all duration-300 ${isActive ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'}`} to="/login">Login</NavLink>
    </>
  )
}

export default LoginUser
