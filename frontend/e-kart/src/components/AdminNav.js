import React from "react";

class AdminNav extends React.Component {
	render() {
		return (
			<div>
				<nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
					<a className='navbar-brand pl-5' href='#'>
						E-Kart
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarCollapse'
						aria-controls='navbarCollapse'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse ' id='navbarCollapse'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item active mr-5'>
								<a className='nav-link' href='#'>
									{" "}
									Past Orders <span className='sr-only'>(current)</span>
								</a>
							</li>
							<li className='nav-item mr-5'>
								<a className='nav-link' href=''>
									Current Orders
								</a>
							</li>
							{/* <li className='nav-item mr-5'>
								<a className='nav-link ' href='#'>
									Past Orders
								</a>
							</li>
							<li className='nav-item mr-5'>
								<a className='nav-link ' href='#'>
									Reports
								</a>
							</li> */}
							<li className='nav-item mr-5'>
								<a className='nav-link ' href='#'>
									Log Out
								</a>
							</li>
						</ul>
						{/* <form className='form-inline mt-2 mt-md-0'>
							<input
								className='form-control mr-sm-2'
								type='text'
								placeholder='Search'
								aria-label='Search'
							/>
							<button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
								Search
							</button>
						</form> */}
					</div>
				</nav>
				​ ​ ​
			</div>
		);
	}
}
export default AdminNav;
