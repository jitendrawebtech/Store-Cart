import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { clearCart, decreaseQty, increaseQty, removeFromCart } from "../store/reducers/cartSlice";
import { FaTrash } from "react-icons/fa6";
import Button from "../componets/ui/Button";
import { useMemo } from "react";

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems);

  const dispatch = useDispatch();

  const cartItemsTotalQty = useMemo(() => {
    return cartItems?.reduce((total, item) => total + item.quantity, 0)
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems?.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }, [cartItems]);

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="container">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

        {
          cartItems.length === 0 ?
            <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
              <h2 className="text-2xl font-bold mb-2 text-gray-700">Your Cart is Empty</h2>
              <Link className="text-blue-600 hover:underline" to="/">Go Back To Home</Link>
            </div>
            : <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-5">
                {
                  cartItems?.map(item => (
                    <div key={item.id} className="bg-white rounded-xl shadow-lg p-5 flex flex-col sm:flex-row gap-5 items-center">
                      <img src={item.image} alt={item.title} className="w-28 h-28 object-contain" />
                      <div className="flex items-center flex-col sm:items-start grow">
                        <Link to={`/product/${item.id}`} className="text-center font-bold text-gray-800 line-clamp-2 hover:text-gray-700">{item.title}</Link>
                        <p className="text-blue-600 font-bold mt-2">${item.price.toFixed(0)}</p>

                        <div className="flex items-center gap-3 mt-4">
                          <button onClick={() => dispatch(decreaseQty(item.id))} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold text-base transition-all duration-300 cursor-pointer text-center"> <FaMinus className="inline-block align-baseline" /> </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => dispatch(increaseQty(item.id))} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold text-base transition-all duration-300 cursor-pointer text-center"> <FaPlus className="inline-block align-baseline" /> </button>
                        </div>

                      </div>

                      <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full transition duration-300 cursor-pointer place-self-end sm:place-self-end">
                        <FaTrash />
                      </button>

                    </div>
                  ))
                }
                <Button
                  varient="btnBlackBordered"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear
                </Button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
                <h2 className="text-2xl font-bold text-gray-600">Order Summary</h2>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Total Items</span>
                    <span>{cartItemsTotalQty}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-lg font-bold">
                    <span>Total Price</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>
                <Button className="mt-4 w-full justify-center">Proceed To Checkout</Button>
              </div>

            </div>
        }
      </div>
    </section>
  )
}

export default Cart
