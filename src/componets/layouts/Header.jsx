import logo from '../../assets/images/logo.png';
import Nav from '../ui/Nav';
import Search from '../ui/Search';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Cart from '../ui/Cart';
import LoginUser from '../ui/LoginUser';
import { mainLinks } from '../../constants/navigationData';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../store/reducers/productSlice';
import { useEffect, useMemo, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';


const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const search = useSelector(state => state.products.search);
  const cartItems = useSelector(state => state.cart.cartItems);

  const dispatch = useDispatch();

  const [local, setLocal] = useState(search);
  const debouncedSearch = useDebounce(local, 300);

  useEffect(() => {
    dispatch(setSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [location.pathname]);

  const cartItemsTotalQty = useMemo(() => {
    return cartItems?.reduce((total, item) => total + item.quantity, 0)
  }, [cartItems]);

  return (
    <header className="bg-white shadow-md py-3 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Nav links={mainLinks} ulClass="hidden lg:flex gap-x-5" linkClass="text-gray-600 hover:text-cyan-600" />

          <Search onChange={setLocal} value={local} />
          <div className="flex items-center gap-x-5">
            <Cart cartItemsTotalQty={cartItemsTotalQty} />
            <LoginUser user={user} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
