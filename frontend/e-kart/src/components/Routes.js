import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkIsAuthenticated } from "../commons";

export const PrivateCustomerRoute = ({ component: Component, ...rest }) => {
	var auth = checkIsAuthenticated();
	;
	return (
		<Route
			{...rest}
			render={props =>
				auth.isAuthenticated === true &&
					auth.userType === "customer" ? (
						<Component {...props} />
					) : (
						<Redirect to='/login/customer' />
					)
			}
		/>
	)
}

export const PrivateVendorRoute = ({ component: Component, ...rest }) => {
	var auth = checkIsAuthenticated();
	return (
		<Route
			{...rest}
			render={props =>
				auth.isAuthenticated === true &&
					auth.userType === "vendor" ? (
						<Component {...props} />
					) : (
						<Redirect to='/login/vendor' />
					)
			}
		/>
	)
}


export const PrivateAdminRoute = ({ component: Component, ...rest }) => {
	var auth = checkIsAuthenticated();
	return (
		<Route
			{...rest}
			render={props =>
				auth.isAuthenticated === true &&
					auth.userType === "admin" ? (
						<Component {...props} />
					) : (
						<Redirect to='/login/admin' />
					)
			}
		/>
	)
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
	var auth = checkIsAuthenticated();
	return (
		<Route
			{...rest}
			render={props =>
				auth.isAuthenticated === true ? (
					<Component {...props} />
				) : (
						<Redirect to='/login/admin' />
					)
			}
		/>
	)
}

export const LoggedInRoute = ({ component: Component, ...rest }) => {
	var auth = checkIsAuthenticated();
	return (
		<Route
			{...rest}
			render={props =>
				auth.isAuthenticated === false ? (
					<Component {...props} />
				) : (
						<Redirect to='/profile' />
					)
			}
		/>
	)
}