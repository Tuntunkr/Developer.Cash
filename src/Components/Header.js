import React from "react";

function Header() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img src="./images.png" alt="" className="abc" />
						&nbsp;&nbsp; Developers.Cash
					</a>
					<div
						class="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
					
						<ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
						<form class="d-flex ">
							<button
								class="btn btn-outline-success"
								type="submit"
							>
								SUBMIT NEW RESOURCE
							</button>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
