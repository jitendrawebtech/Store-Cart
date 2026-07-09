import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ onChange, value }) => {

  const [searchVal, setSearchVal] = useState(value ?? "");

  useEffect(() => setSearchVal(value ?? ""), [value]);

  const searchFun = (e) => {
    const v = e.target.value;
    setSearchVal(v);
    onChange?.(v);
  }

  return (
    <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80 gap-x-2">
      <FaSearch className="text-gray-500 text-lg" />
      <input value={searchVal} onChange={searchFun} className="outline-none bg-transparent w-full text-sm" type="search" placeholder="Search products" />
    </div>
  )
}

export default Search
