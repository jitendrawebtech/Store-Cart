import React from 'react'
import { Link } from 'react-router-dom'

// DEFINED THE STYLE FOR EACH VARIENT

const varients = {
  btnBlackBg: "bg-black hover:bg-gray-700 text-white px-5 py-2",
  btnWhiteBg: "bg-white hover:bg-black-700 text-back px-5 py-2 border-gray-200 border"
}


const Button = ({
  children,
  varient = 'btnBlackBg',
  className = '',
  to = ''
}) => {

  const baseStyle = "rounded font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transition duration-300";


  return (
    <Link to={to} className={`${baseStyle} ${varients[varient]}`}> {children} </Link>
  )
}

export default Button
