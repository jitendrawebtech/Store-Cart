
import { FaStar } from 'react-icons/fa'

const Badge = ({ text }) => {
  return (
    <div className="inline-flex items-center gap-2 bg-blue-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
      <FaStar className="text-yellow-400" />
      {text}
    </div>
  )
}

export default Badge
