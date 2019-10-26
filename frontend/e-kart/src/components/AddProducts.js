import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import style from "./AddProduct.css";
import { Router as BrowserRouter, Link } from "react-router-dom";
import imageDataURI from "image-data-uri";
import firebase from "firebase/app";
import "firebase/storage";
// import queryString from "query-string"

let firebaseConfig = {
	apiKey: "AIzaSyBZxLCaLsE_Hp0FU_Euls_KCwG_Aw7ladU",
	authDomain: "e-kart-fc314.firebaseapp.com",
	databaseURL: "https://e-kart-fc314.firebaseio.com",
	projectId: "e-kart-fc314",
	storageBucket: "e-kart-fc314.appspot.com",
	messagingSenderId: "879173739350",
	appId: "1:879173739350:web:a5341616c0f6ed683bacf7",
	measurementId: "G-2NSFCEE91E"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default class AddProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			brand_name: "",
			model_name: "",
			model_number: "",
			color: "",
			ram: "",
			internal_storage: "",
			primary_camera: "",
			secondary_camera: "",
			battery: "",
			processor: "",
			operating_system: "",
			warranty: "",
			hybrid_sim_slot: "",
			bluetooth: "",
			no_of_sec_camera: 0,
			no_of_primary_camera: 1,
			available_quantity: 0,
			price: 0,
			wifi: "",
			image1: "",
			image2: "",
			offer_price: 0,
			discounted_price: 0,
			progress: ""
		};
	}

	get_data_uri = e => {
		console.log(e.target.files[0]);
		// if(e.target.files[0]){
		this.setState({
			image2: e.target.files[0]
		});
		// }
	};

	submit = () => {
		const { image2 } = this.state;
		const uploadTask = storage.ref(`images/${image2.name}`).put(image2);
		uploadTask.on(
			"state_changed",
			snapshot => {
				//progress function
				this.setState({
					progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100
				});
			},
			error => {
				//error function
				console.log(error);
			},
			() => {
				//complete function
				storage
					.ref("images")
					.child(image2.name)
					.getDownloadURL()
					.then(url => {
						console.log(url);
						axios
							.post(`http://localhost:5000/add_products/${this.props.match.params.vendor_id}`, {
								brand_name: this.state.brand_name,
								model_name: this.state.model_name,
								color: this.state.color,
								ram: this.state.ram,
								internal_storage: this.state.internal_storage,
								primary_camera: this.state.primary_camera,
								secondary_camera: this.state.secondary_camera,
								battery: this.state.battery,
								processor: this.state.processor,
								operating_system: this.state.operating_system,
								warranty: this.state.warranty,
								hybrid_sim_slot: this.state.hybrid_sim_slot,
								bluetooth: this.state.bluetooth,
								no_of_sec_camera: this.state.no_of_sec_camera,
								no_of_primary_camera: this.state.primary_camera,
								available_quantity: this.state.available_quantity,
								price: this.state.price,
								wifi: this.state.wifi,
								image2: this.state.image2,
								offer_price: this.state.offer_price,
								discounted_price: this.state.price * (this.state.offer_price / 100)
							})
							.then(response => {
								console.log(response);
							});
					});
			}
		);
	};

	render() {
		return (
			<div className='container-fluid design1'>
				<div className='card container design2' style={{ width: "800px" }}>
					<form>
						<div class='form-group '>
							<label for='formGroupExampleInput2'>Brand Name:</label>
							<select
								class='form-control form-control-lg'
								onChange={e => this.setState({ brand_name: e.target.value })}
								value={this.state.brand_name}
							>
								<option value=''>Select</option>
								<option value='Samsung'>Samsung</option>
								<option value='Apple'>Apple</option>
								<option value='Oppo'>Oppo</option>
								<option value='Redmi'>Redmi</option>
								<option value='OnePlus'>One Plus</option>
								<option value='Vivo'>Vivo</option>
								<option value='LG'>LG</option>
								<option value='Nokia'>Nokia</option>
							</select>
						</div>
						{/* <div class="form-group ">
                            <label for="formGroupExampleInput2">Model Name:</label>
                            <select class="form-control form-control-lg" onChange={(e) => this.setState({ model_name: e.target.value })} value={this.state.model_name}>
                                <option value="">Select</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Apple">Apple</option>
                                <option value="Oppo">Oppo</option>
                                <option value="Redmi">Redmi</option>
                                <option value="OnePlus">One Plus</option>
                                <option value="Vivo">Vivo</option>
                                <option value="LG">LG</option>
                                <option value="Nokia">Nokia</option>
                            </select>
                        </div> */}
						<div className='row'>
							<div className='col-lg-6'>
								<div class='form-group '>
									<label for='formGroupExampleInput2'>Model Name:</label>
									<select
										class='form-control form-control-lg'
										onChange={e => this.setState({ model_name: e.target.value })}
										value={this.state.model_name}
									>
										<option value=''>Select</option>
										<option value='Samsung'>Samsung</option>
										<option value='Apple'>Apple</option>
										<option value='Oppo'>Oppo</option>
										<option value='Redmi'>Redmi</option>
										<option value='OnePlus'>One Plus</option>
										<option value='Vivo'>Vivo</option>
										<option value='LG'>LG</option>
										<option value='Nokia'>Nokia</option>
									</select>
								</div>
							</div>

							<div className='col-lg-6'>
								<div class='form-group '>
									<label for='formGroupExampleInput2'>Color:</label>
									<select
										class='form-control form-control-lg'
										onChange={e => this.setState({ color: e.target.value })}
										value={this.state.colo}
									>
										<option value=''>Select</option>
										<option value='Red'>Red</option>
										<option value='Blue'>Blue</option>
										<option value='Grey'>Grey</option>
										<option value='Black'>Black</option>
										<option value='White'>White</option>
									</select>
								</div>
							</div>

							<div className='col-lg-6'>
								<div class='form-group '>
									<label for='formGroupExampleInput2'>RAM:</label>
									<select
										class='form-control form-control-lg'
										onChange={e => this.setState({ ram: e.target.value })}
										value={this.state.ram}
									>
										<option value=''>Select</option>
										<option value='2GB'>2GB</option>
										<option value='3GB'>3GB</option>
										<option value='4GB'>4GB</option>
										<option value='6GB'>6GB</option>
										<option value='8GB'>8GB</option>
									</select>
								</div>
							</div>
							<div className='col-lg-6'>
								<div class='form-group '>
									<label for='formGroupExampleInput2'>Internal Srorage:</label>
									<select
										class='form-control form-control-lg'
										onChange={e => this.setState({ internal_storage: e.target.value })}
										value={this.state.internal_storage}
									>
										<option value=''>Select</option>
										<option value='16GB'>16GB</option>
										<option value='32GB'>32GB</option>
										<option value='64B'>64GB</option>
										<option value='132GB'>132GB</option>
										<option value='264GB'>264GB</option>
									</select>
								</div>
							</div>
						</div>
						<div class='form-group '>
							<label for='formGroupExampleInput2'>Primary Camera:</label>
							<select
								class='form-control form-control-lg'
								onChange={e => this.setState({ primary_camera: e.target.value })}
								value={this.state.primary_camera}
							>
								<option value=''>Select</option>
								<option value='2MP'>2MP</option>
								<option value='3MP'>3MP</option>
								<option value='5MP'>5MP</option>
								<option value='8MP'>8MP</option>
							</select>
						</div>
						<div class='form-group '>
							<label for='formGroupExampleInput2'>Secondary Camera:</label>
							<select
								class='form-control form-control-lg'
								onChange={e => this.setState({ secondary_camera: e.target.value })}
								value={this.state.secondary_camera}
							>
								<option value=''>Select</option>
								<option value='2MP'>2MP</option>
								<option value='3MP'>3MP</option>
								<option value='5MP'>5MP</option>
								<option value='8MP'>8MP</option>
							</select>
						</div>
						<div className='row'>
							<div className='col-lg-6'>
								<div class='form-group '>
									<label for='formGroupExampleInput2'>Battery:</label>
									<input
										type='text'
										class='form-control'
										id='formGroupExampleInput2'
										placeholder='Battery'
										onChange={e => this.setState({ battery: e.target.value })}
										value={this.state.battery}
									/>
								</div>
							</div>

							<div className='col-lg-6'>
								<div class='form-group '>
									<label for='formGroupExampleInput2'>Processor:</label>
									<input
										type='text'
										class='form-control'
										id='formGroupExampleInput2'
										placeholder='Processor'
										onChange={e => this.setState({ processor: e.target.value })}
										value={this.state.processor}
									/>
								</div>
							</div>

							<div className='col-lg-6'>
								<div class='form-group '>
									<label for='formGroupExampleInput2'>Operating System:</label>
									<input
										type='text'
										class='form-control'
										id='formGroupExampleInput2'
										placeholder='Operating System'
										onChange={e => this.setState({ operating_system: e.target.value })}
										value={this.state.operating_system}
									/>
								</div>
							</div>
							<div className='col-lg-6'>
								<div class='form-group '>
									<label for='formGroupExampleInput2'>Warranty:</label>
									<input
										type='text'
										class='form-control'
										id='formGroupExampleInput2'
										placeholder='Warranty'
										onChange={e => this.setState({ warranty: e.target.value })}
										value={this.state.warranty}
									/>
								</div>
							</div>
						</div>
						<div class='form-group '>
							<label for='formGroupExampleInput2'>Hybrid Sim Slot:</label>
							<select
								class='form-control form-control-lg'
								onChange={e => this.setState({ hybrid_sim_slot: e.target.value })}
								value={this.state.hybrid_sim_slot}
							>
								<option value='Yes'>Yes</option>
								<option value='No'>No</option>
							</select>
						</div>
						<div class='form-group '>
							<label for='formGroupExampleInput2'>Image:</label>
							<input
								type='text'
								class='form-control'
								id='formGroupExampleInput2'
								placeholder='Image'
								onChange={e => this.setState({ image1: e.target.value })}
								value={this.state.image1}
							/>
						</div>
						<div className='row'>
							<div className='col-lg-6'>
								<div class='form-group '>
									<label for='formGroupExampleInput2'>Bluetooth:</label>
									<select
										class='form-control form-control-lg'
										onChange={e => this.setState({ bluetooth: e.target.value })}
										value={this.state.bluetooth}
									>
										<option value='Yes'>Yes</option>
										<option value='No'>No</option>
									</select>
								</div>
							</div>

							<div className='col-lg-6'>
								<div class='form-group '>
									<label for='formGroupExampleInput2'>Wifi</label>
									<select
										class='form-control form-control-lg'
										onChange={e => this.setState({ wifi: e.target.value })}
										value={this.state.wifi}
									>
										<option value='Yes'>Yes</option>
										<option value='No'>No</option>
									</select>
								</div>
							</div>

							<div className='col-lg-6'>
								<div class='form-group '>
									<label for='formGroupExampleInput2'>Number of Secondary Camera:</label>
									<select
										class='form-control form-control-lg'
										onChange={e => this.setState({ no_of_sec_camera: e.target.value })}
										value={this.state.no_of_sec_camera}
									>
										<option value=''>Select</option>
										<option value='one'>1</option>
										<option value='two'>2</option>
										<option value='three'>3</option>
									</select>
								</div>
							</div>
							<div className='col-lg-6'>
								<div class='form-group '>
									<label for='formGroupExampleInput2'>Number of Primary Camera:</label>
									<select
										class='form-control form-control-lg'
										onChange={e => this.setState({ no_of_primary_camera: e.target.value })}
										value={this.state.no_of_primary_camera}
									>
										<option value=''>Select</option>
										<option value='one'>1</option>
										<option value='two'>2</option>
										<option value='three'>3</option>
									</select>
								</div>
							</div>
						</div>
						<div class='form-group '>
							<label for='formGroupExampleInput2'>Available Quantity:</label>
							<input
								type='number'
								class='form-control border-bottom'
								id='formGroupExampleInput2'
								placeholder='Available Quantity'
								onChange={e => this.setState({ available_quantity: e.target.value })}
								value={this.state.available_quantity}
							/>
						</div>
						<div class='form-group '>
							<label for='formGroupExampleInput2'>Price:</label>
							<input
								type='number'
								class='form-control'
								id='formGroupExampleInput2'
								placeholder='Price'
								onChange={e => this.setState({ price: e.target.value })}
								value={this.state.price}
							/>
						</div>
						<div class='form-group '>
							<label for='formGroupExampleInput2'>Image:</label>
							<input
								type='file'
								class='form-control'
								id='formGroupExampleInput2'
								placeholder='Image'
								onChange={this.get_data_uri}
							/>
						</div>
						<div className='text-center'>
							<button type='button' class='btn btn-primary' onClick={this.submit}>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
