import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Router as BrowserRouter, Link } from "react-router-dom";
import Nav from "./Nav";
// import queryString from "query-string"

export default class AllLogins extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			order: "0"
		};
	}
	render() {
		return (
			<div className='container'>
                <Nav></Nav>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
				<div style={{ backgroundColor: "#00CBA1" }}>
					<br />
					<h1 className='text-center'>E-Kart</h1>
					<br />
					<div class='card-deck' style={{ width: "1100px" }}>
						<div className='card border-0 ml-5 shadow-lg p-2 mb-5 bg-transparency rounded'>
							<img src='admin.svg' class='card-img-top' alt='...' />

							<div class='card-img-overlay'>
								<div class='card-body'>
									<h1 class='card-title mx-auto text-center mt-4'>Admin</h1>
								</div>
							</div>
							<div class='card-body border-0 ' style={{ opacity: "0.3" }}>
								<div className='text-center'>
									<button
										type='button'
										className='btn btn-outline-primary'
                                        style={{ border: "2px solid blue" }}
                                        onClick = {()=>this.props.history.push("/login/admin")}
									>
										Login
									</button>
									{/* <button
										type='button'
										className='btn btn-outline-primary ml-5'
										style={{ border: "2px solid blue" }}
									>
										SignUp
									</button> */}
								</div>
							</div>
						</div>
						​ ​
						<div class='card border-0 shadow-lg p-2 mb-5 bg-transparency rounded'>
							<img src='admin.svg' class='card-img-top' alt='...' />
							<div class='card-img-overlay'>
								<div class='card-body'>
									<h1 class='card-title mx-auto text-center mt-4'>Vender</h1>
								</div>
							</div>
							<div class='card-body border-0' style={{ opacity: "0.3" }}>
								<div className='text-center'>
									<button
										type='button'
										className='btn btn-outline-primary'
                                        style={{ border: "2px solid blue" }}
                                        onClick = {()=>this.props.history.push("/login/vendor")}
									>
										Login
									</button>
									<button
										type='button'
										className='btn btn-outline-primary ml-5'
                                        style={{ border: "2px solid blue" }}
                                        onClick = {()=>this.props.history.push("/company_register")}
									>
										SignUp
									</button>
								</div>
							</div>
						</div>
						​ ​
						<div class='card border-0 shadow-lg p-2 mb-5 bg-transparency rounded'>
							<img src='admin.svg' class='card-img-top' alt='...' />
							<div class='card-img-overlay'>
								<div class='card-body'>
									<h1 class='card-title mx-auto text-center mt-4'>Customer</h1>
								</div>
							</div>
							<div class='card-body border-0' style={{ opacity: "0.3" }}>
								<div className='text-center'>
									<button
										type='button'
										className='btn btn-outline-primary'
                                        style={{ border: "2px solid blue" }}
                                        onClick = {()=>this.props.history.push("/login/customer")}
									>
										Login
									</button>
									<button
										type='button'
										className='btn btn-outline-primary ml-5'
                                        style={{ border: "2px solid blue" }}
                                        onClick = {()=>this.props.history.push("/customer_register")}
									>
										SignUp
									</button>
								</div>
							</div>
						</div>
					</div>
					​
				</div>
				<div className='md-2 '>
					<img src='Group(1).svg' class='card-img-top ' alt='...' style={{ width: "100%" }} />
				</div>
			</div>
		);
	}
}
