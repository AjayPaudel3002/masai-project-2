import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkIsAuthenticated } from "../commons";

export const PrivateCustomerRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			checkIsAuthenticated("customer").isAuthenticated === true &&
			checkIsAuthenticated("customer").userType === "customer" ? (
				<Component {...props} />
			) : (
				<Redirect to='/login/customer' />
			)
		}
	/>
);

export const PrivateVendorRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			checkIsAuthenticated("vendor").isAuthenticated === true &&
			checkIsAuthenticated("vendor").userType === "vendor" ? (
				<Component {...props} />
			) : (
				<Redirect to='/login/vendor' />
			)
		}
	/>
);

export const PrivateAdminRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			checkIsAuthenticated("admin").isAuthenticated === true &&
			checkIsAuthenticated("admin").userType === "admin" ? (
				<Component {...props} />
			) : (
				<Redirect to='/login/admin' />
			)
		}
	/>
);

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			checkIsAuthenticated().isAuthenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect to='/login' />
			)
		}
	/>
);

export const LoggedInRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			checkIsAuthenticated().isAuthenticated === false ? (
				<Component {...props} />
			) : (
				<Redirect to='/profile' />
			)
		}
	/>
);
