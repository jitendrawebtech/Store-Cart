import { useEffect, useState } from 'react'
import { FaHeart, FaMinus, FaPlus, FaTruck } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProductsData, fetchSingleProduct } from '../store/reducers/productSlice';
import { FaRegStar, FaShieldAlt, FaShoppingCart, FaStar, FaUndo } from 'react-icons/fa';
import Button from '../componets/ui/Button';
import Card from '../componets/ui/Card';

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, singleProduct } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
    dispatch(fetchProductsData());
  }, [dispatch]);

  const [quantity, setQuantity] = useState(1);

  return (
    <section>
      <div className="container">
        <div className="min-h-screen bg-linear-to-br from-gray-100 via-white to-gray-200 py-6 px-3">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="relative bg-linear-to-br from-blue-50 to-gray-100 flex justify-center items-center p-5 min-h-80">
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-semibold shadow">
                    60% OFF
                  </div>
                  <button className="absolute top-4 right-4 bg-white px-3 py-2.5 rounded-full shadow hover:scale-105 transition-all duration-300 cursor-pointer">
                    <FaHeart className="text-red-600" />
                  </button>

                  <img className="w-full max-w-55 object-contain hover:scale-105 transition duration-300" src={singleProduct?.image} alt={singleProduct?.title} />
                </div>
                <div className="p-5">
                  <p className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide inline-block">
                    {singleProduct?.category}
                  </p>
                  <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mt-3 leading-snug">{singleProduct?.title}</h1>

                  <div className="flex items-center gap-2 mt-3">

                    <div className="inline-flex text-green-600 gap-0.5">
                      {
                        Array.from({ length: Math.round(singleProduct?.rating.rate) }, (a, i) => (
                          <FaStar key={i} />
                        ))
                      }
                      {
                        Array.from({ length: 5 - Math.round(singleProduct?.rating.rate) }, (a, i) => (
                          <FaRegStar key={i} />
                        ))
                      }
                    </div>
                    <p className="text-gray-500 text-sm">
                      ({singleProduct?.rating.rate})
                      {" "}
                      {singleProduct?.rating.count} Reviews
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="flex gap-x-2 font-extrabold text-lg">
                      <span className="text-2xl md:text-3xl text-green-600">${singleProduct?.price.toFixed(0)}</span>
                      <span className="text-gray-400 line-through">${(singleProduct?.price * 1.6).toFixed(0)}</span>
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mt-4 leading-6">{singleProduct?.description}</p>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Quantity</h3>
                    <div className="flex items-center gap-3">

                      <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold text-base transition-all duration-300 cursor-pointer text-center"> <FaMinus className="inline-block align-baseline" /> </button>

                      <span>{quantity}</span>

                      <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold text-base transition-all duration-300 cursor-pointer text-center"> <FaPlus className="inline-block align-baseline" /> </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-2 text-center mt-4">
                    <Button className="flex justify-center" varient="btnBlackBg" >
                      {<><FaShoppingCart className="inline-block" /> Add to Cart </>}
                    </Button>
                    <Button className="flex justify-center" varient="btnWhiteBg">
                      Buy Now
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
                    <div className="bg-gray-100 p-3 rounded-lg flex flex-col items-center text-center">
                      <FaTruck className="text-lg text-blue-600 mb-1" />
                      <h3 className="font-medium text-xs text-gray-800">Free Shipping</h3>
                      <p className="text-gray-500 text-[10px] mt-1">Orders Over $100</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg flex flex-col items-center text-center">
                      <FaShieldAlt className="text-lg text-green-600 mb-1" />
                      <h3 className="font-medium text-xs text-gray-800">Secure Payment</h3>
                      <p className="text-gray-500 text-[10px] mt-1">100% Protected</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg flex flex-col items-center text-center">
                      <FaUndo className="text-lg text-orange-600 mb-1" />
                      <h3 className="font-medium text-xs text-gray-800">Easy Return</h3>
                      <p className="text-gray-500 text-[10px] mt-1">7 Days Policy</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-14 px-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
              <p className="text-gray-500 text-sm mt-1">You may also like these products</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {
              products?.filter(
                product => product?.category === singleProduct?.category && product?.id !== singleProduct?.id
              ).slice(0, 6).map(item => (
                <Card
                  key={item.id}
                  product={item}
                  textToCart={<><FaShoppingCart className="inline-block" /> Add to Cart </>}
                  textToBuy="Buy Now"
                />
              ))
            }
          </div>
        </div>


      </div>
    </section>
  )
}

export default SingleProduct
