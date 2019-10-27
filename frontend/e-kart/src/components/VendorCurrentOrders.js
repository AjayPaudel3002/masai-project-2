import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Router as BrowserRouter, Link } from "react-router-dom";
import VendorNav from "./VendorNav";
import { accessCookie } from "../commons/cookies";
// import queryString from "query-string"

export default class VendorCurrentOrders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current_order: []
		};
	}

	componentDidMount() {
		let token = accessCookie("vendor");
		axios.get(`http://localhost:5000/vendor_current_orders/${token}`).then(response => {
			console.log(response);
		});
	}

	render() {
		return (
			<React.Fragment>
				<VendorNav></VendorNav>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<div className='container-fluid'>
					{this.state.current_order.length != 0 ?<div className='container'>
						{this.state.current_order.map(item => {
							return (
								<div className='card'>
									<div className='row'>
										<div className='col-lg-3'>
											<img src={item.src} style={{ height: "250px", width: "250px" }} />
										</div>
										<div className='col-lg-3'>
											<p>price desciption</p>
											<p>{item.name}</p>
											<p>{item.seller}</p>
											<p>{item.new_price}</p>​
										</div>
										<div className='col-lg-3'>
											<p>Customer Details</p>
											<p>{item.name}</p>
											<p>{item.name}</p>
											<p>{item.name}</p>​
										</div>
										<div className='col-lg-3'>
											<p>Delivery Status</p>
											<div className='mt-5'>
												<button className='btn btn-secondary'> Deliver</button>
											</div>{" "}
											​
										</div>
									</div>
								</div>
							);
						})}
					</div>:"No Current Orders Available"}
				</div>
			</React.Fragment>
		);
	}
}
