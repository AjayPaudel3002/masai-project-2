import React from "react";
class Register extends React.Component{
    render(){
        return(
            <div className="container-fluid mx-auto" style={{border:"5px solid black"}}>
                <form>
                <br />
                    <div className="container">
                    <div class="form-row">
                        
                        <div class="form-group col-lg-6 col-md-6">
                                
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="First Name" />
                        </div>
                        <div class="form-group col-lg-6 col-md-6">
                        
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="Last Name" />
                        </div>
                        <div class="form-group col-lg-12 col-md-6">
                                
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div class="form-group col-lg-12 col-md-6">
                              
                                    <input type="password" class="form-control" id="inputEmail4" placeholder="password" />
                        </div>
                        <div class="form-group col-lg-12 col-md-6">
                              
                                    <input type="password" class="form-control" id="inputEmail4" placeholder="Conform Password" />
                        </div>
                        <div class="form-group col-lg-12 col-md-6">
                               
                                    <input type="text" class="form-control form-control-sm" id="inputEmail4" placeholder="Phone Number" />
                        </div>
                        <div class="form-group col-lg-12 col-md-6">
                               
                                    <input type="text" class="form-control form-control-sm" id="inputEmail4" placeholder="Company Name" />
                        </div>
                        <div class="form-group col-lg-12 col-md-6">
                                    <textarea rows="4" cols="113"></textarea>
                        </div>
                        <button type="button" class="btn btn-primary mx-auto">Login</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Register;