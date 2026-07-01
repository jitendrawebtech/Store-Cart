import { FaStar } from "react-icons/fa";
// import favicon from "../../assets/images/favicon.png";

const CardProduct = ({ product }) => {
  const { image, price, title } = product;
  return (
    <div className="rounded-sm shadow-gray-300 shadow-xl overflow-hidden">
      <div className="bg-gray-200 py-8 px-3 h-70">
        <img className="mx-auto w-full h-full" src={image} alt="Product Images" />
      </div>
      <div className="bg-white p-4 flex flex-col gap-y-3">
        <h4 className="text-gray-600">{title.slice(0, 25) + "..."}</h4>
        <div className="flex items-center gap-x-2">
          <div className="inline-flex">
            <FaStar className="text-green-600" />
            <FaStar className="text-green-600" />
            <FaStar className="text-green-600" />
            <FaStar className="text-green-600" />
            <FaStar className="text-green-600" />
          </div>
          <p className="text-gray-400">(4.1)</p>
        </div>
        <p className="flex gap-x-2 font-bold text-lg">
          <span className="text-green-600">$ {price}</span>
          {/* <span className="text-gray-400 line-through">$ {price + Math.floor(price * 15 / 100)}</span> */}
          <span className="text-gray-400 line-through">$ {Math.round((price * 1.6) * 100) / 100}</span>
        </p>
      </div>
    </div>
  )
}

export default CardProduct
