import CommunityCard from "./utilities/CommunityCard"

const tags = ["one", "two", "three"]

const Community = () => {
  return (
    <div className="p-5">
      <h2>Crowdfunding</h2>
      {/* cards */}
      <div>
        <CommunityCard
          image="./bc_img.jpg"
          category="crowdfunding"
          title="Flipstarter"
          tags={tags}
          content="Flipstarter provides a way for any project to engage with potential funders in a way that encourages accountability for projects and fairness for funders."
        />
      </div>
    </div>
  )
}

export default Community
