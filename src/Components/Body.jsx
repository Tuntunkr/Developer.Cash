import React from "react"

function Body() {
  return (
    <>
      <div>
        <p className="cash"> Bitcoin Cash </p>
      </div>
      <div>
        <h1 className="text-primary text-weight-bold animated pulse infinite slow">
          Developers.Cash
        </h1>
      </div>
      &nbsp;&nbsp;
      <div>
        <p className="text">
          Useful developer resources for building the Internet of Cash
        </p>
      </div>
      {/* <div className="serach">
				<input type="search" tabindex="0" placeholder="search" />
			</div> */}
      <div class="form-floating mb-3" className="serach">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
      </div>
      &nbsp;&nbsp;
      <div className="butt">
        <span>
          <button tabindex="0" type="button">
            <spa className="block">Community</spa>
          </button>
        </span>
        {/* you here bronetwork is slow. okay make it again connect  */}
        <span>
          <button tabindex="0" type="button">
            <spa className="block">Community</spa>
          </button>
        </span>
        <span>
          <button tabindex="0" type="button">
            <spa className="block">Community</spa>
          </button>
        </span>
        <span>
          <button tabindex="0" type="button">
            <spa className="block">Community</spa>
          </button>
        </span>
      </div>
    </>
  )
}

export default Body
