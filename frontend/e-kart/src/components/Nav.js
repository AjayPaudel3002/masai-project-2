import React from "react";
import { Router as BrowserRouter, Link, Route, Switch } from "react-router-dom";
import {checkIsTokenPresentInCookie, checkIsAuthenticated,clearUserToken} from "../commons/index"
import { createCookie, accessCookie, deleteCookie } from '../commons/cookies'

class Nav extends React.Component {
	render() {
        let is_logged_in = checkIsAuthenticated("customer")
		console.log(is_logged_in)
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
					<form className='form-inline mt-2 mt-md-0 text-center'>
						<input
							className='form-control mr-sm-2 ml-5'
							type='text'
							placeholder='location'
							aria-label='Search'
						/>
						<input
							className='form-control mr-sm-2 ml-3'
							type='text'
							placeholder='mobile brands'
							aria-label='Search'
						/>
						<button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
							Search
						</button>
					</form>
					<div className='collapse navbar-collapse ' id='navbarCollapse'>
						<ul className='navbar-nav ml-auto'>
							<Link to={`/orders`} classNameName='mr-3'>
								<li className='nav-item active mr-3'>
									Orders <span className='sr-only'>(current)</span>
								</li>
							</Link>
							<Link to={`/cart`} className='mr-3'>
								<li className='nav-item mr-3'>carts</li>
							</Link>
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
							{is_logged_in.userType == "customer" ? (
								<li className='nav-item'>
									<Link to={`/`} className='mr-3'>
										<li className='nav-item mr-3' onClick={() => clearUserToken("customer")}>
											Log Out
										</li>
									</Link>
								</li>
							) : (
								<Link to={`/all_logins`} className='mr-3'>
									<li className='nav-item mr-3'>Log In</li>
								</Link>
							)}
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
export default Nav;
