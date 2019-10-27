import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Router as BrowserRouter, Link } from "react-router-dom";
import AdminNav from "./AdminNav";
// import queryString from "query-string"

export default class AdminCurrentOrders extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cart: [
				{
					id: 1,
					src: "https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
					name: "Lg 190L Direct Cool Single Door",
					seller: "Harshil Home Applience",
					old_price: "18,000",
					new_price: "16,490",
					save: "SAVE FOR LATER",
					remove: "REMOVE"
				},
				{
					id: 2,
					src: "https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
					name: "Lg 190L Direct Cool Single Door",
					seller: "Harshil Home Applience",
					old_price: "18,000",
					new_price: "16,490",
					save: "SAVE FOR LATER",
					remove: "REMOVE"
				},
				{
					id: 2,
					src: "https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
					name: "Lg 190L Direct Cool Single Door",
					seller: "Harshil Home Applience",
					old_price: "18,000",
					new_price: "16,490",
					save: "SAVE FOR LATER",
					remove: "REMOVE"
				}
			]
		};
	}
	render() {
		return (
			<React.Fragment>
                <AdminNav></AdminNav>
                <br></br>
				<div className='container-fluid'>
					<div className='container'>
						{this.state.cart.map(item => {
							return (
								<div className='card'>
									<div className='row'>
										<div className='col-lg-3'>
											<img src={item.src} style={{ height: "250px", width: "250px" }} />
										</div>
										<div className='col-lg-3'>
											<p>Description About Product</p>
											<p>{item.name}</p>
											<p>{item.seller}</p>
											<p>{item.new_price}</p>​
										</div>
										<div className='col-lg-3'>
											<p>Delivered on Details</p>
											<p>{item.name}</p>
											<p>{item.name}</p>
											<p>{item.name}</p>​
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
