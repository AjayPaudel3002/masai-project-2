import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Router as BrowserRouter, Link } from "react-router-dom";
// import queryString from "query-string"

export default class BuyProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cart: [
				{
					id: 1,
					src: "https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
					brandName: "Redmi Note 7S (Sapphire Blue, 64 GB)  (4 GB RAM)",
					modelName: "Redmi Note 7S",
					modelNumber: "MZB7742IN",
					color: "Sapphire Blue",
					price: "₹9,999",
					ram: "4 GB",
					internalStorage: "64 GB",
					primaryCamera: "48MP + 5MP",
					secondaryCamera: "13MP",
					battery: "4000 mAh",
					proccessor: "Octa Core",
					operatingSystem: "Android Pie 9.0",
					warranty: "1 Year",
					hybridSimSlot: "Yes",
					image:
						"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
					bluetooth: "Yes",
					wifi: "yes",
					numberOfSecondaryCamera: "",
					numberOfPrimaryCamera: "",
					avaliableQuantity: "4"
				}
			]
		};
	}
	render() {
		return (
			<div className='container'>
				{this.state.cart.map(item => {
					return (
						<div className='row'>
							<div className='col-lg-5'>
								<div class='card border-0 shadow-lg p-3 mt-5 mb-5 bg-white rounded'>
									<img src={item.src} class='card-img-top' alt='...' />
									<div class='card-body'>
										<div className='text-center'>
											<button
												type='button'
												className='btn btn-outline-warning border-0 text-dark'
												style={{ width: "150px", backgroundColor: "#E86100" }}
											>
												ADD TO CART
											</button>
											<button
												type='button'
												className='btn btn-outline-warning  ml-5 text-dark'
												style={{ width: "150px", backgroundColor: "#E86100" }}
											>
												BUY NOW
											</button>
										</div>
										<br />
									</div>
								</div>
							</div>
							<div className='col-lg-5'>
								<br />

								<div class='card border-0 shadow-sm p-3 mb-5 bg-white rounded'>
									<div class='card-body'>
										<h4 className='text-primary'>Specification</h4>
										<div class='card-text'>Brand Name : {" " + item.brandName}</div>
										<p class='card-text'>Model Name : {" " + item.modelName}</p>
										<p class='card-text'>Model Number : {" " + item.modelNumber}</p>
										<p class='card-text'>Price : {" " + item.price}</p>
										<hr />
										<h4 className='text-primary'>Detail Description</h4>
										<p class='card-text'>Color : {" " + item.color}</p>
										<p class='card-text'>RAM : {"   " + item.ram}</p>
										<p class='card-text'>Battery : {" " + item.battery}</p>
										<p class='card-text'>Operating System : {"     " + item.operatingSystem}</p>
										<p class='card-text'>Bluetooth : {"     " + item.bluetooth}</p>
										<p class='card-text'>WiFi : {"     " + item.wifi}</p>
										<p class='card-text'>Available Quantity : {"     " + item.avaliableQuantity}</p>
										<p class='card-text'>Internal Storage : {"     " + item.internalStorage}</p>
										<p class='card-text'>Hybrid SIm Slot : {"     " + item.hybridSimSlot}</p>
										<hr />
										<h4 className='text-primary'>Camera</h4>
										<p class='card-text'>Primary Camera : {"     " + item.primaryCamera}</p>
										<p class='card-text'>Secondary Camera : {"     " + item.secondaryCamera}</p>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
