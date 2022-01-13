import { SiBitcoincash } from "react-icons/si"
import { AiFillPlusCircle } from "react-icons/ai"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-[#22293A] p-3 border-b justify-between border-gray-200 flex items-center">
      {/* logo */}
      <div>
        <SiBitcoincash className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
      </div>
      {/* button */}
      <div className="flex items-center space-x-2">
        <AiFillPlusCircle className="w-8 h-8 text-slate-900" />
        <Link
          className="text-base font-medium uppercase text-slate-900"
          to="/create-resource"
        >
          Create New Resource
        </Link>
      </div>
    </header>
  )
}

export default Header
