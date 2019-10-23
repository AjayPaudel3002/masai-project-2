import React from "react";
import ReactDOM from "react-dom"
import {Router as BrowserRouter,Link,Route,Switch} from "react-router-dom"
import Home from "./Home"
// import Login from "./Login"
// import Register from "./Register.js"
// import CompanyRegister from "CompanyRegister"




export default class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <Route path = "/" exact render = {(props)=><Home {...props}></Home>}></Route>
                    {/* <Route path = "/login" render = {(props)=><Login {...props}></Login>}></Route> */}
                    {/* <Route path = "/company_register" render ={(props)=><CompanyRegister> {...props}</CompanyRegister>}></Route> */}
                    {/* <Route path = "/register" render = {(props)=><Register {...props}></Register>}></Route> */}
                    {/* <Route path = "/all_logins" render = {(props)=><AllLogins> {...props}</AllLogins>}></Route>
                    <Route path = "/products" render = {(props)=><Products> {...props}</Products>}></Route>
                    <Route path = "/buy_products/:product_id" render = {(props)=><BuyProducts> {...props}</BuyProducts>}></Route>
                    <Route path = "/cart" render = {(props)=><Cart> {...props}</Cart>}></Route>
                    <Route path = "/orders" render = {(props)=><Orders> {...props}</Orders>}></Route>
                    <Route path = "/add_products/:vendor_id" render = {(props)=><AddProducts> {...props}</AddProducts>}></Route>
                    <Route path = "/view_products/:vendor_id" render = {(props)=><ViewProducts> {...props}</ViewProducts>}></Route>
                    <Route path = "/vendor_current_orders/:vendor_id" render = {(props)=><VendorCurrentOrders> {...props}</VendorCurrentOrders>}></Route>
                    <Route path = "/vendor_past_orders/:vendor_id" render = {(props)=><VendorPastOrders> {...props}</VendorPastOrders>}></Route>
                    <Route path = "/admin_past_order/" render = {(props)=><AdminPastOrders> {...props}</AdminPastOrders>}></Route>
                    <Route path = "/admin_current_order/" render = {(props)=><AdminCurrentOrders> {...props}</AdminCurrentOrders>}></Route> */}
            </React.Fragment>
        )
    }
}