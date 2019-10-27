import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Router as BrowserRouter, Link } from "react-router-dom";
import {
	setUserTokenInCookie,
	clearUserToken,
	checkIsTokenPresentInCookie,
	getTokenFromCookie,
	checkIsAuthenticated
} from "../commons/index";
import { createCookie } from "../commons/cookies";
// import undefined from "firebase/empty-import"
// import queryString from "query-string"

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	login = () => {
		axios
			.post(`http://localhost:5000/login/${this.props.match.params.person}`, {
				email: this.state.email,
				password: this.state.password
			})
			.then(response => {
				console.log(response);
				if (response.data.error == "false") {
					setUserTokenInCookie(response.data.type, response.data.token);
				}
			});
	};
	render() {
		console.log(checkIsAuthenticated("vendor").userType);
		console.log(this.state);
		return (
			<div class='jumbotron jumbotron-fluid design1'>
				<div class='container '>
					<div>
						<h1 class='display-7 text-center'>Wel-Come</h1>
					</div>
					<div className='card mx-auto' style={{ width: "390px" }}>
						<div className='card-body text-center mx-auto'>
							<input
								className='form-control form-control-lg'
								type='text'
								placeholder='Email'
								style={{ width: "350px" }}
								onChange={e => this.setState({ email: e.target.value })}
								value={this.state.email}
							/>
							<br />
							<input
								className='form-control form-control-lg'
								type='text'
								placeholder='Password'
								style={{ width: "350px" }}
								onChange={e => this.setState({ password: e.target.value })}
								value={this.state.password}
							/>
							<br />
							<div>
								<button type='button' class='btn btn-link' onClick={this.login}>
									Login
								</button>
								<button
									type='button'
									class='btn btn-link'
									onClick={() => this.props.history.push("/customer_register")}
								>
									Sign Up
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
