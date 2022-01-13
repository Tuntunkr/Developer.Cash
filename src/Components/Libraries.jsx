import LibrariesCard from "./utilities/LibrariesCard"

const tags = ["SDK", "Node JS", "JavaScript"]

const links = ["official site", "repository"]

const Libraries = () => {
  return (
    <div className="p-3">
      <h2 className="mb-10">Libraries</h2>
      <div>
        <LibrariesCard
          image="./bc_img4.jpg"
          category="JavaScript or Node JS SDK"
          title="BitBox SDK"
          tags={tags}
          content="Bitbox-sdk is a utility for creating great Bitcoin Cash applications. It can be used from the command line or from within client/server apps."
          links={links}
        />
      </div>
    </div>
  )
}

export default Libraries
