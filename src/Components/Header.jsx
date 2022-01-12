import { SiBitcoincash } from "react-icons/si"
import { AiFillPlusCircle } from "react-icons/ai"

const Header = () => {
  return (
    <header className="bg-[#22293A] p-3 border border-gray-200 flex items-center justify-between">
      {/* logo */}
      <div>
        <SiBitcoincash className="w-10 h-10 text-green-400" />
      </div>
      {/* button */}
      <div className="flex items-center space-x-2">
        <AiFillPlusCircle className="w-10 h-10 text-slate-900" />
        <button className="text-lg font-semibold uppercase text-slate-900">
          Submit new resource
        </button>
      </div>
    </header>
  )
}

export default Header
