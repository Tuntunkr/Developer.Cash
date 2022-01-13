import { IoLinkOutline } from "react-icons/io5"

const links = ["official site"]

const FormPreview = ({ category, title, content }) => {
  return (
    <div>
      <h3>Preview</h3>
      <div>
        <img src="./bit.jpg" alt="" />
        <div>
          <h4>{category}</h4>
          <h5>{title}</h5>
          <p>{content}</p>
          <div>
            {links.map((link, index) => (
              <div key={index} className="flex items-center space-x-2">
                <IoLinkOutline className="w-10 h-10 text-black" />
                <h6 className="text-lg font-semibold text-black uppercase">
                  {link}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormPreview
