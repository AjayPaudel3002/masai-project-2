import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import style from "./AddProduct.css";
import { Router as BrowserRouter, Link } from "react-router-dom"
// import queryString from "query-string"

export default class AddProducts extends React.Component {
    render(){
        return(
        <div className="container-fluid design1">
            <div className="card container design2" style={{width:"800px"}} >
                <form>
                  
                        <div class="form-group ">
                            <label for="formGroupExampleInput2">Brand Name:</label>
                            <input type="text" class="form-control border-bottom" id="formGroupExampleInput2" placeholder="Brand Name" />
                        </div>
                        <div class="form-group ">
                            <label for="formGroupExampleInput2">Model Name:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Model Name" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Model Number:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Model Number" />
                            </div>  
                            </div>

                            <div className="col-lg-6">
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Color:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Color" />
                            </div>  
                            </div>

                            <div className="col-lg-6">
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">RAM:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="RAM" />
                            </div>  
                            </div>
                            <div className="col-lg-6">
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Internal Srorage:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Internal Srorage" />
                            </div>  
                            </div>
                            
                        </div>
                        <div class="form-group ">
                            <label for="formGroupExampleInput2">Primary Camera:</label>
                            <input type="text" class="form-control border-bottom" id="formGroupExampleInput2" placeholder="Primary Camera" />
                        </div>
                        <div class="form-group ">
                            <label for="formGroupExampleInput2">Secondary Camera:</label>
                            <input type="text" class="form-control border-bottom" id="formGroupExampleInput2" placeholder="Secondary Camera" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Battery:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Battery" />
                            </div>  
                            </div>

                            <div className="col-lg-6">
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Processor:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Processor" />
                            </div>  
                            </div>
                             
                            <div className="col-lg-6">
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Operating System:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Operating System" />
                            </div>  
                            </div>
                            <div className="col-lg-6">
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Warranty:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Warranty" />
                            </div>  
                            </div>
                            </div>
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Hybrid Sim Slot:</label>
                            <input type="text" class="form-control border-bottom" id="formGroupExampleInput2" placeholder="Hybrid Sim Slot" />
                        </div>
                        <div class="form-group ">
                            <label for="formGroupExampleInput2">Image:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Image" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Bluetooth:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Bluetooth" />
                            </div>  
                            </div>

                            <div className="col-lg-6">
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Wifi</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Wifi" />
                            </div>  
                            </div>
                             
                            <div className="col-lg-6">
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Number of Secondary Camera:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Number of Secondary Camera" />
                            </div>  
                            </div>
                            <div className="col-lg-6">
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Number of Primary Camera:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Number of Primary Camera" />
                            </div>  
                            </div>
                            </div>
                            <div class="form-group ">
                            <label for="formGroupExampleInput2">Available Quantity:</label>
                            <input type="text" class="form-control border-bottom" id="formGroupExampleInput2" placeholder="Available Quantity" />
                        </div>
                        <div class="form-group ">
                            <label for="formGroupExampleInput2">Price:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Price" />
                        </div>
                        <div class="form-group ">
                            <label for="formGroupExampleInput2">Image:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Image" />
                        </div>
                        <div className="text-center">
                        <button type="button" class="btn btn-primary">Primary</button>
                        </div>
                </form> 
            </div>
        </div>
        )
    }
}
