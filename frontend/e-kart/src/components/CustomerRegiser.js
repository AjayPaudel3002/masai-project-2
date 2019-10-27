import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Router as BrowserRouter, Link } from "react-router-dom";
import Nav from "./Nav";
// import queryString from "query-string"

export default class CompanyRegister extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			password: "",
			phone_number: 0,
			location: "",
			address: ""
		};
	}

	register = () => {
		axios
			.post(`http://localhost:5000/customer_register`, {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
				phone_number: this.state.phone_number,
				location: this.state.location,
				address: this.state.address
			})
			.then(function(response) {
				console.log(response);
			});
	};

	render() {
		return (
			<div className='container mx-auto'>
				<Nav></Nav>
				<br></br>
				<br></br>
				<form className='container mx-auto' style={{ width: "600px" }}>
					<div class='form-row'>
						<div class='form-group col-lg-12 col-md-12 col-sm-12 col-12'>
							<br />
							<input
								type='text'
								class='form-control border border-secondary'
								id='inputPassword4'
								placeholder='Name'
								onChange={e => this.setState({ name: e.target.value })}
								value={this.state.name}
							/>
						</div>
						<div class='form-group col-lg-12 col-md-12 col-sm-12 col-12'>
							<br />
							<input
								type='email'
								class='form-control border border-secondary'
								id='inputPassword4'
								placeholder='Email'
								onChange={e => this.setState({ email: e.target.value })}
								value={this.state.email}
							/>
						</div>
						<div class='form-group col-lg-12 col-md-12 col-sm-12 col-12'>
							<br />
							<input
								type='password'
								class='form-control border border-secondary'
								id='inputPassword4'
								placeholder='password'
								onChange={e => this.setState({ password: e.target.value })}
								value={this.state.password}
							/>
						</div>
						<div class='form-group col-lg-12 col-md-12 col-sm-12 col-12'>
							<br />
							<input
								type='number'
								class='form-control border border-secondary'
								id='inputPassword4'
								placeholder='Phone Number'
								onChange={e => this.setState({ phone_number: e.target.value })}
								value={this.state.phone_number}
							/>
						</div>
						<div class='form-group col-lg-12 col-md-12 col-sm-12 col-12'>
							<br />
							<textarea
								rows='4'
								cols='58'
								className='text-secondary border border-secondary'
								placeholder='Address'
								onChange={e => this.setState({ address: e.target.value })}
								value={this.state.address}
							>
								Address
							</textarea>
						</div>
						<div class='form-group col-lg-12 col-md-12 col-sm-12 col-12'>
							<br />
							<input
								type='text'
								class='form-control border border-secondary'
								id='inputPassword4'
								placeholder='location'
								onChange={e => this.setState({ location: e.target.value })}
								value={this.state.location}
							/>
						</div>
						<br />
						<button
							type='button'
							class='btn btn-primary mx-auto'
							onClick={() => {
								this.props.history.push("/login/customer");
								this.register();
							}}
						>
							Register
						</button>
					</div>
				</form>
			</div>
		);
	}
}
