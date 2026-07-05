import { NavLink } from 'react-router-dom';

const Nav = ({ links, ulClass, linkClass }) => {
  return (
    <nav>
      <ul className={ulClass}>

        {
          links?.map((item, i) => (
            <li key={i}>
              <NavLink
                end={item.link === "/"}
                className={({ isActive }) => ` transition-all duration-300 ${isActive ? 'text-cyan-600 active' : linkClass}`}
                to={item.link}>{item.text}
              </NavLink>
            </li>
          ))
        }

      </ul >
    </nav >
  )
}

export default Nav
