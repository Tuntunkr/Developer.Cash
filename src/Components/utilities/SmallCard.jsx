import { smallCard } from "../../data"

const SmallCard = ({ smallCard: { Icon, title } }) => {
  return (
    <div>
      {smallCard.map((data, index) => (
        <div key={index}>
          <Icon className="w-10 h-10 text-white" />
          <h3>{data.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default SmallCard
