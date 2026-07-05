import Nav from '../ui/Nav'
import { mainLinks, servicesLinks } from '../../constants/navigationData'
import Social from '../ui/Social'
import SOCIAL_MENU from '../../constants/SocialData'

const Footer = () => {

  return (
    <footer className="bg-gray-900 py-10">
      <div className="container">
        <div className="grid grid-cols lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2 lg:mb-5 text-white">Store Cart</h2>
            <p className="leading-7 text-gray-300">Store Kart offers stylish clothing, shoes, and accessories for ladies and gents, delivering trendy fashion and great value online fast.</p>
            <Social className="mt-4" socialMenu={SOCIAL_MENU} />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-7 text-white">Quick Links</h2>
            <Nav links={mainLinks} ulClass="leading-7" linkClass="text-gray-300 hover:text-white" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-7 text-white">Customer Services</h2>
            <Nav links={servicesLinks} ulClass="leading-7" linkClass="text-gray-300 hover:text-white" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-7 text-white">NewsLetter</h2>
            <p className="leading-7 text-gray-300">Subscribe to get updates about new products and special offers.</p>
            <form action="">
              <input className="px-3 py-3 bg-gray-800 text-gray-300 my-4 w-full outline-0 rounded-sm" type="email" name="subscribe" id="subscribe" placeholder="Enter your email" />
              <button className="bg-cyan-500 hover:bg-cyan-600 w-full py-3 rounded-sm cursor-pointer text-white transition-all duration-300">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
