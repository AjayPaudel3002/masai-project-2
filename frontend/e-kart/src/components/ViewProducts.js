import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Router as BrowserRouter, Link } from "react-router-dom";
import VendorNav from "./VendorNav";
import getTokenFromCookie from "../commons";
import { createCookie, accessCookie, deleteCookie } from "../commons/cookies";
// import queryString from "query-string"

export default class ViewProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: []
		};
	}
	componentDidMount() {
		//  here this.props.params.
		let token = accessCookie("vendor");
		console.log(token);
		axios
			.get(`http://localhost:5000/view_products_vendor/${token}`)
			.then(response => {
				// handle success
				console.log(response.data);
				this.setState({
					product: response.data
				});
			})
			.catch(error => {
				// handle error
				// alert(error)
			});
	}

	render() {
		console.log(this.state.product);

		return (
			<div>
				<VendorNav></VendorNav>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<div className='container mx-auto'>
					<div className='row'>
						{this.state.product.map(item => {
							return (
								<div className='col-lg-3'>
									<div className='card mx-auto shadow-lg p-3 mb-5 bg-white rounded'>
										<img
											src={item.image2}
											className='mx-auto'
											style={{ height: "300px", width: "200px" }}
										/>
										<hr />
										<div className='mx-auto text-primary'>{item.model_name}</div>
										<div className='text-center text-success box'>Offers ₹{item.discounted_price} off</div>
										<div className='mx-auto'>Price:{item.price}</div>
										<div className='mx-auto'>Available Quantity:{item.available_quantity}</div>
										<div className='text-center'>
											<button className='btn btn-primary '>update</button>

											<button className='btn btn-primary ml-2'>Delete</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
