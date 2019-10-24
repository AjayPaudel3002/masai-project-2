import React from "react";
import { Route, Redirect } from "react-router-dom"
import { checkIsAuthenticated } from "../commons";

export const PrivateCustomerRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        checkIsAuthenticated().isAuthenticated === true && checkIsAuthenticated().userType === "customer"
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export const PrivateVendorRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        checkIsAuthenticated().isAuthenticated === true && checkIsAuthenticated().userType === "vedor"
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export const PrivateAdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        checkIsAuthenticated().isAuthenticated === true && checkIsAuthenticated().userType === "admin"
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        checkIsAuthenticated().isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)


export const LoggedInRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        checkIsAuthenticated().isAuthenticated === false
            ? <Component {...props} />
            : <Redirect to='/profile' />
    )} />
)
