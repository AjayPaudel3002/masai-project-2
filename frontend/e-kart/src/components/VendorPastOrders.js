import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Router as BrowserRouter, Link } from "react-router-dom";
import VendorNav from "./VendorNav";
// import queryString from "query-string"

export default class VendorPastOrders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			venderPase: [
				{
					id: 1,
					product_name: "Abc",
					color: "red",
					customer_name: "Sunil",
					deliver_date: "Jan 08",
					order_total: "99"
				},
				{
					id: 2,
					product_name: "Abc",
					color: "red",
					customer_name: "Sunil",
					deliver_date: "Jan 08",
					order_total: "99"
				},
				{
					id: 3,
					product_name: "Abc",
					color: "red",
					customer_name: "Sunil",
					deliver_date: "Jan 08",
					order_total: "99"
				},
				{
					id: 4,
					product_name: "Abc",
					color: "red",
					customer_name: "Sunil",
					deliver_date: "Jan 08",
					order_total: "99"
				},
				{
					id: 5,
					product_name: "Abc",
					color: "red",
					customer_name: "Sunil",
					deliver_date: "Jan 08",
					order_total: "99"
				},
				{
					id: 6,
					product_name: "Abc",
					color: "red",
					customer_name: "Sunil",
					deliver_date: "Jan 08",
					order_total: "99"
				},
				{
					id: 7,
					product_name: "Abc",
					color: "red",
					customer_name: "Sunil",
					deliver_date: "Jan 08",
					order_total: "99"
				},
				{
					id: 8,
					product_name: "Abc",
					color: "red",
					customer_name: "Sunil",
					deliver_date: "Jan 08",
					order_total: "99"
				}
			]
		};
	}
	render() {
		return (
			<React.Fragment>
				<VendorNav></VendorNav>
				<br></br>
				<br></br>
				<br></br>
				<div className='container-fluid'>
					<div class='card border-0 '>
						<img
							src='https://www.colorhexa.com/e2f7f3.png'
							class='card-img'
							alt='...'
							style={{ opacity: "0.5" }}
						/>
						<div class='card-img-overlay'>
							<div>
								<h1>Vender Past</h1>
							</div>
							<div className='container mx-auto ' style={{ width: "800px" }}>
								<div
									class='card  text-dark shadow p-3 mb-5 bg-white rounded'
									style={{ opacity: "0.9", border: "1px solid black" }}
								>
									{this.state.venderPase.map(cart => {
										return (
											<div className='card shadow p-3 mb-5 bg-white rounded'>
												<div class='card-header'>{cart.product_name}</div>​
												<div class='card-body bg-light text-dark'>
													<h5 class='card-title'>{cart.product_name}</h5>
													<p class='card-text'>{cart.product_name}</p>
													<p class='card-text'>{cart.product_name}</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
