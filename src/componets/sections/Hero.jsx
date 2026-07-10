import { FaArrowRight, FaStar } from "react-icons/fa"
import Badge from "../ui/Badge"
import AnchorButton from "../ui/AnchorButton"

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-blue-50 via-white to-indigo-100 ">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <Badge text="Best Online Shopping Experience" />
            <h1 className="text-xl md:text-3xl lg-text-4xl font-extrabold text-gray-900 mt-6">
              Discover Modern <span className="text-green-600 mx-2">Fashion</span> & Lifestyle Products
            </h1>
            <div className="inline-flex gap-x-4 mt-8">
              <AnchorButton to="/products">Shop Now <FaArrowRight /></AnchorButton>
              <AnchorButton to="/categories" varient="btnWhiteBg">Explore More</AnchorButton>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex justify-center py-8">

            {/* MAIN IMAGE CARD */}
            <div className="shadow-[0px_0px_200px_#9FB0FE] rounded-full relative">

              {/* FLOATING REVIEW */}
              <div className="absolute top-6 -right-6 bg-white shadow-xl rounded-2xl px-5 py-4">
                <div className="flex text-yellow-400 gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-sm text-gray-600">15k+ Happy Customers</p>
              </div>

              <div className="bg-white rounded-[40px] shadow-2xl p-8 w-80">
                <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop" alt="Image" className="w-full h-80 object-cover rounded-3xl" />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl p-5">
                <p className="text-gray-600 text-sm">Special Offer</p>
                <h3 className="text-2xl font-bold text-green-600">Up To 50% OFF</h3>
              </div >

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
