import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import { Router as BrowserRouter, Link } from "react-router-dom"
// import queryString from "query-string"

export default class CompanyRegister extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            password:"",
            company_address:"",
            phone_number:0,
            location:""

        }
    }

    componentDidMount(){
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
    }

    render() {
        return (
            <div className="container-fluid mx-auto" style={{ border: "5px solid black" }}>
                <form>
                    <br />
                    <div className="container">
                        <div class="form-row">
                            <div class="form-group col-lg-6 col-md-6">

                                <input type="text" class="form-control" id="inputEmail4" placeholder="Name" onChange ={(e)=>this.setState({name:e.target.value})} value = {this.state.name} />
                            </div>
                            <div class="form-group col-lg-12 col-md-6">

                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" onChange ={(e)=>this.setState({email:e.target.value})} value = {this.state.email} />
                            </div>
                            <div class="form-group col-lg-12 col-md-6">

                                <input type="password" class="form-control" id="inputEmail4" placeholder="password" onChange ={(e)=>this.setState({password:e.target.value})} value = {this.state.password} />
                            </div>
                            <div class="form-group col-lg-12 col-md-6">

                                <input type="password" class="form-control" id="inputEmail4" placeholder="Conform Password" onChange ={(e)=>this.setState({conform_password:e.target.value})} value = {this.state.conform_password} />
                            </div>
                            <div class="form-group col-lg-12 col-md-6">

                                <input type="text" class="form-control form-control-sm" id="inputEmail4" placeholder="Phone Number" onChange ={(e)=>this.setState({phone_number:e.target.value})} value = {this.state.phone_number} />
                            </div>
                            <div class="form-group col-lg-12 col-md-6">
                                <textarea class="form-control" rows="5" id="comment" onChange ={(e)=>this.setState({address:e.target.value})} value = {this.state.address}>Address</textarea>
                            </div>
                            <div class="form-group col-lg-12 col-md-6">

                                <input type="text" class="form-control form-control-sm" id="inputEmail4" placeholder="location" onChange ={(e)=>this.setState({location:e.target.value})} value = {this.state.location} />
                            </div>
                            <div class="form-group col-lg-12 col-md-6">
                                <textarea rows="4" cols="113"></textarea>
                            </div>
                            <button type="button" class="btn btn-primary mx-auto">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
