import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cartSlice";

const Card = ({ product, textToCart, textToBuy }) => {
  const { image, price, title, rating, id } = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      const productWithQty = { ...product, quantity: 1 };
      dispatch(addToCart(productWithQty));
      alert(`Added ${productWithQty.quantity} item(s) to cart`);
    }
  }

  return (
    <div className="rounded-sm shadow-gray-300 hover:shadow-2xl shadow-xl overflow-hidden">
      <Link to={`/product/${id}`} className="bg-gray-200 py-4 px-2 h-60 block">
        <img className="mx-auto w-full h-full" src={image} alt={title} />
      </Link>
      <div className="bg-white p-4 flex flex-col gap-y-1">

        <Link to={`/product/${id}`} className="text-gray-600 text-sm font-semibold">{title?.slice(0, 20) + "..."}</Link>
        <p className="flex gap-x-2 font-bold text-lg">
          <span className="text-green-600">${price.toFixed(0)}</span>
          <span className="text-gray-400 line-through">${(price * 1.6).toFixed(0)}</span>
        </p>
        <div className="flex items-center gap-x-2">
          <div className="inline-flex text-green-600">
            {
              Array.from({ length: Math.round(rating?.rate) }, (a, i) => (
                <FaStar key={i} />
              ))
            }
            {
              Array.from({ length: 5 - Math.round(rating?.rate) }, (a, i) => (
                <FaRegStar key={i} />
              ))
            }
          </div>
          <p className="text-gray-500 text-sm">({rating?.rate})</p>
        </div>

        <div className="flex flex-col gap-y-2 text-center">
          <Button className="flex justify-center" varient="btnBlackBg" onClick={handleAddToCart}>
            {textToCart}
          </Button>
          <Button className="flex justify-center" varient="btnWhiteBg">
            {textToBuy}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
