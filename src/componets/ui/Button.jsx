// DEFINED THE STYLE FOR EACH VARIENT

const varients = {
  btnBlackBg: "bg-black hover:bg-gray-700 text-white px-5 py-2",
  btnWhiteBg: "bg-white hover:bg-black-700 text-back px-5 py-2 border-gray-200 border"
}


const Button = ({
  children,
  varient = 'btnBlackBg',
  className = '',
  onClick,
  type = "button"
}) => {

  const baseStyle = "cursor-pointer rounded font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transition duration-300";


  return (
    <button onClick={onClick} className={`${baseStyle} ${varients[varient]} ${className}`} type={type}> {children} </button>
  )
}

export default Button
