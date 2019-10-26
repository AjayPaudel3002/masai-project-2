import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import { Router as BrowserRouter, Link } from "react-router-dom"
import { createCookie, accessCookie, deleteCookie } from '../commons/cookies/index.js'
// import queryString from "query-string"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    login = () => {
        axios.post(`http://localhost:5000/login/${this.props.match.params.person}`, {
            email: this.state.email,
            password: this.state.password,
        }).then((response)=>{
            console.log(response)
            createCookie(response.type,response.token,1)
        })
        
        
    }
    render() {
        console.log(this.state)
        return (
            <div class="jumbotron jumbotron-fluid design1">
                <div class="container ">
                    <div>
                        <h1 class="display-7 text-center">Wel-Come</h1>
                    </div>
                    <div className="card mx-auto" style={{ width: "390px" }}>
                        <div className="card-body text-center mx-auto">
                            <input className="form-control form-control-lg" type="text" placeholder="Email" style={{ width: "350px" }} onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
                            <br />
                            <input className="form-control form-control-lg" type="text" placeholder="Password" style={{ width: "350px" }} onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} />
                            <br />
                            <div>
                                <button type="button" class="btn btn-link" onClick={this.login}>Login</button>
                                <button type="button" class="btn btn-link">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

