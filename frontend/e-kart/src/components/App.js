import React from "react";
import ReactDOM from "react-dom";
import { Router as BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import Login from "./Login";
import Register from "./Register.js";
import AllLogins from "./AllLogins";
import AddProducts from "./AddProducts";
import Cart from "./Cart";
import CompanyRegister from "./CompanyRegister";
import CustomerRegister from "./CustomerRegiser";
import ViewProducts from "./ViewProducts";
import Products from "./Products"
// import CompanyRegister from "CompanyRegister"
import {
	LoggedInRoute,
	PrivateRoute,
	PrivateAdminRoute,
	PrivateCustomerRoute,
	PrivateVendorRoute
} from "./Routes";
import BuyProducts from "./BuyProducts";
import VendorCurrentOrders from "./VendorCurrentOrders";
import VendorPastOrders from "./VendorPastOrders";
import AdminPastOrders from "./AdminPastOrders";

export default class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				{/* <Route path = "/" exact render = {(props)=><Home {...props}></Home>}></Route> */}
				<Route path='/' exact component={Home} />
				{/* <Route path = "/login" render = {(props)=><Login {...props}></Login>}></Route> */}
				<Route path='/login/:person' component={Login} />
				<Route
					path='/company_register'
					render={props => <CompanyRegister {...props}></CompanyRegister>}
				></Route>
				<Route
					path='/customer_register'
					render={props => <CustomerRegister {...props}></CustomerRegister>}
				></Route>
				<PrivateRoute path='/register' component={Register} />
				<Route path='/all_logins' render={props => <AllLogins {...props}></AllLogins>}></Route>
				<Route path = "/products" render = {(props)=><Products {...props}></Products>}></Route>
				<Route
					path="/buy_products"
					render={props => <BuyProducts {...props}></BuyProducts>}
				></Route>
				<Route path='/cart' render={props => <Cart {...props}></Cart>}></Route>
				<Route path='/orders' render={props => <Orders {...props}></Orders>}></Route>
				<PrivateCustomerRoute path='/orders' component={Orders} />
				<Route
					path='/add_products'
					render={props => <AddProducts {...props}></AddProducts>}
				></Route>
				<Route
					path='/view_products'
					render={props => <ViewProducts {...props}></ViewProducts>}
				></Route>
				<Route
					path='/vendor_current_orders'
					render={props => <VendorCurrentOrders {...props}></VendorCurrentOrders>}
				></Route>
				<Route
					path='/vendor_past_orders'
					render={props => <VendorPastOrders {...props}></VendorPastOrders>}
				></Route>
				<Route
					path='/admin_past_orders/'
					render={props => <AdminPastOrders {...props}></AdminPastOrders>}
				></Route>
				{/* <Route path = "/admin_current_order/" render = {(props)=><AdminCurrentOrders> {...props}</AdminCurrentOrders>}></Route> */}
			</React.Fragment>
		);
	}
}
