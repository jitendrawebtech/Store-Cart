import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <Link className="relative text-gray-600 hover:text-cyan-600 transition duration-300 text-xl" to="/cart">
      <FaShoppingCart />
      <span className="absolute -top-2 left-3 bg-red-600 text-xs text-white  px-1 rounded-full">1</span>
    </Link>
  )
}

export default Cart
