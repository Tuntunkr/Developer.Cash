import { IoLinkOutline } from "react-icons/io5"

const LibrariesCard = ({ image, category, title, tags, content }) => {
  return (
    <div className="flex w-[340px] flex-col rounded-lg border-2 overflow-hidden border-white shadow-md">
      <img
        src={image}
        alt="logo"
        className="object-cover object-center w-[340px] h-[340px]"
      />
      <div className="p-3 bg-white text-slate-900">
        <h3 className="my-2 text-base font-semibold text-orange-500">
          {category}
        </h3>
        <h4 className="text-xl font-semibold text-slate-900">{title}</h4>
        <div className="my-2">
          {tags.map((text, index) => (
            <h5
              className="inline-flex px-3 py-1 mr-2 text-base font-semibold rounded-lg bg-slate-400 text-slate-900"
              key={index}
            >
              {text}
            </h5>
          ))}
        </div>
        <h6 className="my-3 text-sm text-slate-700">{content}</h6>
        <div className="flex items-center space-x-2">
          <IoLinkOutline className="w-10 h-10 text-black" />
          <h6 className="text-lg font-semibold text-black uppercase">Link</h6>
        </div>
      </div>
    </div>
  )
}

export default LibrariesCard
