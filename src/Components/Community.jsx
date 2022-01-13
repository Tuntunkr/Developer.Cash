import CommunityCard from "./utilities/CommunityCard"

const tags = ["one", "two", "three"]
const links = ["link"]

const Community = () => {
  return (
    <div className="p-5">
      <h2 className="mb-10">Community</h2>
      {/* cards */}
      <div className="sm:flex sm:items-center sm:space-x-10">
        <CommunityCard
          image="./bc_img.jpg"
          category="crowdfunding"
          title="Flipstarter"
          tags={tags}
          content="Flipstarter provides a way for any project to engage with potential funders in a way that encourages accountability for projects and fairness for funders."
          links={links}
        />
        <CommunityCard
          image="./bc_img.jpg"
          category="crowdfunding"
          title="Flipstarter"
          tags={tags}
          content="Flipstarter provides a way for any project to engage with potential funders in a way that encourages accountability for projects and fairness for funders."
          links={links}
        />
        <CommunityCard
          image="./bc_img.jpg"
          category="crowdfunding"
          title="Flipstarter"
          tags={tags}
          content="Flipstarter provides a way for any project to engage with potential funders in a way that encourages accountability for projects and fairness for funders."
          links={links}
        />
      </div>
    </div>
  )
}

export default Community
