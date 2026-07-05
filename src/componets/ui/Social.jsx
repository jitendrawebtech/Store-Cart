import { FaInstagram } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Social = ({ className, socialMenu }) => {

  return (
    <div className={`flex gap-3 ${className}`}>
      {
        socialMenu?.map((item, i) => (
          <Link key={i} className="w-10 h-10 bg-gray-600 text-white rounded-full flex justify-center items-center hover:text-xl hover:text-cyan-600 transition-all duration-300" to={item.link}>{item.icon}</Link>
        ))
      }
    </div>
  )
}

export default Social
