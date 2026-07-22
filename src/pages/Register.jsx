import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logofull.png';
import icon from '../assets/images/icon.png'
import { CiWarning } from 'react-icons/ci';
import { FaEnvelope, FaGoogle, FaLock, FaUser } from 'react-icons/fa6';
import Button from '../componets/ui/Button';

const defaultObject = {
  name: "",
  email: "",
  password: "",
  confirmassword: ""
}

const Register = () => {

  const navigate = useNavigate();

  const storedUser = sessionStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    if (user) { navigate("/") };
  }, [user, navigate]);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState(defaultObject);

  const handleChange = (e) => {
    if (error) setError("");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill all fileds");
      return;
    }
    sessionStorage.setItem("user", JSON.stringify(formData));
    setError("");
    alert("Register Successfully");
    navigate("/")
  }

  return (
    <div className="flex items-center justify-center px-4 py-10 min-h-screen bg-linear-to-br from-gray-600 via-gray-600 to-purple-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full sm:max-w-sm lg:max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-gray-700 to-gray-800 text-white p-12 relative overflow-hidden">
          <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-16 -left-16"></div>
          <div className="absolute w-72 h-72 bg-white/10 rounded-full -bottom-24 -right-24"></div>

          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold leading-tight">Join Us</h1>
            <p className="mt-6 text-lg text-indigo-100 leading-8">Create your account and start exploring premium products, exclusive offers, and fast shopping experience.</p>
            <img className="w-72 my-10 drop-shadow-2xl rounded-2xl border-8 border-white" src={logo} alt="Shopping" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center flex justify-center items-center flex-col gap-2">
            <Link to="/">
              <img className="w-12 drop-shadow-2xl rounded-full" src={icon} alt="Login" />
            </Link>
            <h2 className="text-4xl font-extrabold text-gray-800">Create Account</h2>
            <p className="text-gray-500 my-3">Welcome back! Please login to your account.</p>
          </div>

          {
            error &&
            <div className="bg-red-50 border-red-200 border text-red-700 px-5 py-4 rounded-2xl shadow-sm flex items-start gap-3 animate-pulse">
              <div className="bg-red-100 p-2 rounded-full">
                <CiWarning />
              </div>

              <div>
                <h3 className="font-semibold text-sm">Somethings went wrong</h3>
                <p className="text-sm mt-1">{error}</p>
              </div>
            </div>
          }

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label className="text-sm font-semibold text-gray-700">Full Name</label>
              <div className="flex items-center border border-gray-300 rounded-2xl mt-2 px-3 py-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200 transition">

                <FaUser className="text-gray-400 text-sm" />
                <input onChange={handleChange} className="w-full outline-none px-3 text-sm" type="name" name="name" placeholder="Enter your name" value={formData.name} />

              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <div className="flex items-center border border-gray-300 rounded-2xl mt-2 px-3 py-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200 transition">

                <FaEnvelope className="text-gray-400 text-sm" />
                <input onChange={handleChange} className="w-full outline-none px-3 text-sm" type="email" name="email" placeholder="Enter your email" value={formData.email} />

              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <div className="flex items-center border border-gray-300 rounded-2xl mt-2 px-3 py-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200 transition">

                <FaLock className="text-gray-400 text-sm" />
                <input onChange={handleChange} className="w-full outline-none px-3 text-sm" type="password" name="password" placeholder="Enter your password" value={formData.password} />

              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
              <div className="flex items-center border border-gray-300 rounded-2xl mt-2 px-3 py-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200 transition">

                <FaLock className="text-gray-400 text-sm" />
                <input onChange={handleChange} className="w-full outline-none px-3 text-sm" type="password" name="confirmassword" placeholder="Enter your confirm password" value={formData.confirmassword} />

              </div>
            </div>

            <Button className="w-full text-center justify-center" type="submit">Login</Button>

            {/* DIVIDER */}

            <div className='flex items-center gap-4'>
              <div className='flex-1 h-px bg-gray-300'></div>
              <span className='text-gray-400 text-sm'>OR</span>
              <div className='flex-1 h-px bg-gray-300'></div>
            </div>
            <button type='button' className="w-full border border-gray-300 hover:bg-gray-100 py-4  rounded-2xl font-medium text-sm flex items-center justify-center gap-3  transition duration-300 cursor-pointer">
              <FaGoogle className='text-red-500' />
              Countinue with Google
            </button>

          </form>

          {/* FOOTER  */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?
            <Link to="/login" className="text-blue-600 font-semibold ml-1 hover:underline">Login</Link>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Register