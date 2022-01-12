import { AiOutlineSearch, AiFillTool, AiOutlineCaretDown } from "react-icons/ai"
import { ImUsers } from "react-icons/im"
import { BsCode } from "react-icons/bs"
import { IoGitNetworkSharp, IoCloudCircleSharp } from "react-icons/io5"
import { IoIosCloud } from "react-icons/io"
import { GiGraduateCap } from "react-icons/gi"

import { useState } from "react"

const Landing = () => {
  const [searchInput, setSearchInput] = useState("")
  return (
    <main className="flex flex-col justify-center items-center px-5 py-10">
      <h2 className="text-3xl text-center text-slate-500">
        &lt; Bitcoin Cash &gt;
      </h2>
      <h3 className="my-10 text-2xl text-center text-emerald-600">
        Developers.Cash
      </h3>
      <h3 className="text-lg font-semibold text-center text-black">
        Useful developer resources for building the internet of cash.
      </h3>

      {/* cards */}
      <div>{/* <SmallCard smallCard={smallCard} /> */}</div>
      <form
        action=""
        className="flex items-center px-1 my-3 space-x-1 bg-yellow-50"
      >
        <input
          type="search"
          name="search"
          id=""
          className="w-full h-12 border-none outline-none border0 outline-0 active:outline-0 active:border-0 focus:outline-0 focus:border-0 focus:outline-none focus:border-none"
          placeholder="search"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <AiOutlineSearch className="w-7 h-7 text-slate-500" />
        <AiOutlineCaretDown className="w-7 h-7 text-slate-500" />
      </form>

      {/* cards */}
      <div>
        <div className="icon-container">
          <ImUsers className="icon" />
          <h3 className="card-text">COMMUNITY</h3>
        </div>
        <div className="icon-container">
          <BsCode className="icon" />
          <h3 className="card-text">LIBRARIES</h3>
        </div>
        <div className="icon-container">
          <IoGitNetworkSharp className="icon" />
          <h3 className="card-text">NETWORK</h3>
        </div>
        <div className="icon-container">
          <IoCloudCircleSharp className="icon" />
          <h3 className="card-text">NODE SOFTWARE</h3>
        </div>
        <div className="icon-container">
          <IoIosCloud className="icon" />
          <h3 className="card-text">PROTOCOLS</h3>
        </div>
        <div className="icon-container">
          <GiGraduateCap className="icon" />
          <h3 className="card-text">SERVICES</h3>
        </div>
        <div className="icon-container">
          <AiFillTool className="icon" />
          <h3 className="card-text">TOOLS</h3>
        </div>
      </div>
      <h3>Submit New Resource</h3>
      <h4>Fill out the form below</h4>
    </main>
  )
}

export default Landing
