import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = ({ cartItemsTotalQty }) => {
  return (
    <Link className="relative text-gray-600 hover:text-cyan-600 transition duration-300 text-xl" to="/cart">
      <FaShoppingCart />
      {cartItemsTotalQty > 0 && <span className="absolute -top-2 left-3 bg-red-600 text-xs text-white  px-1 rounded-full font-bold">
        {cartItemsTotalQty}
      </span>}
    </Link>
  )
}

export default Cart
