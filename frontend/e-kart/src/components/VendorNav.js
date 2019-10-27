import React from "react";
import {
	checkIsTokenPresentInCookie,
	checkIsAuthenticated,
	clearUserToken
} from "../commons/index";
import { Router as BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { createCookie, accessCookie, deleteCookie } from "../commons/cookies";

class VendorNav extends React.Component {
	render() {
		let is_logged_in = checkIsAuthenticated("vendor");
		console.log(is_logged_in);
		return (
			<div>
				<nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
					<a className='navbar-brand' href='#'>
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
					<div className='collapse navbar-collapse' id='navbarCollapse'>
						<ul className='navbar-nav mr-auto'>
							<Link to={"/add_products"}>
								<li className='nav-item active'>
									Add Product <span className='sr-only'>(current)</span>
								</li>
							</Link>
							<Link to={"/view_products"}>
								<li className='nav-item'>View Products</li>
							</Link>
							<Link to={"/vendor_current_orders"}>
								<li className='nav-item'>Current Orders</li>
							</Link>
							<Link to={"/vendor/past_orders"}>
								<li className='nav-item'>Past Orders</li>
							</Link>
							{/* <Link to={"/view_products"}>
							<li className='nav-item'>
								<a className='nav-link ' href='#'>
									Reports
								</a>
							</li>
							</Link> */}
							{is_logged_in.userType == "vendor" ? (
								<li className='nav-item'>
									<Link to={`/`} className='mr-3'>
										<li className='nav-item mr-3' onClick={() => clearUserToken("vendor")}>
											Log Out
										</li>
									</Link>
								</li>
							) : (
								<Link to={`/login/vendor`} className='mr-3'>
									<li className='nav-item mr-3'>Log In</li>
								</Link>
							)}
						</ul>
						<form className='form-inline mt-2 mt-md-0'>
							<input
								className='form-control mr-sm-2'
								type='text'
								placeholder='Search'
								aria-label='Search'
							/>
							<button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
								Search
							</button>
						</form>
					</div>
				</nav>
				​ ​ ​
			</div>
		);
	}
}
export default VendorNav;
