import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import style from "./AddProduct.css";
import { Router as BrowserRouter, Link } from "react-router-dom"
// import queryString from "query-string"

export default class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cart:[
                {
                    id:1,
                    src:"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name:"Lg 190L Direct Cool Single Door",
                    seller:"Harshil Home Applience",
                    old_price:"18,000",
                    new_price:"16,490",
                    save:"SAVE FOR LATER",
                    remove:"REMOVE"
                },
                {
                    id:2,
                    src:"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name:"Lg 190L Direct Cool Single Door",
                    seller:"Harshil Home Applience",
                    old_price:"18,000",
                    new_price:"16,490",
                    save:"SAVE FOR LATER",
                    remove:"REMOVE"
                },
                
            ]
        }
    }
    render(){
        return(
            <div className="container-fluid" className="green">
            <div className="container" style={{width:"1000px"}}>
                <div className="row">
                    <div className="col-lg-9">
                    <div class="card-header">
                       <h4>My Cart</h4>
                    </div>
                        
                          {this.state.cart.map(item =>{
                              return(
                                  <div className="card border-0 shadow-sm p-3 mb-5 bg-white rounded">
                                      
                                    <div className="row">
                                        <div className="col-lg-3 mx-auto">
                                                <img src={item.src} style={{height:"100px",width:"100px"}}/>
                                                <div>
                                                    <button className="ml-1 bg-white" style={{borderRadius:"15px",width:"30px",border:"1px solid black"}}>+</button>
                                                    <button className="ml-1 bg-white" style={{borderRadius:"15px",width:"40px",border:"1px solid black"}}>1</button>
                                                    <button className="ml-1  bg-white " style={{borderRadius:"15px",width:"30px",border:"1px solid black"}}>-</button>
                                                </div>
                                        </div>
                                        <div className="col-lg-5">
                                                {item. name}
                                                {item.seller}
                                        </div>
                                        <div className="col-lg-4">
                                                <span>₹{item.new_price + " "}</span><span>{+" " +"₹"+item.old_price}</span>
                                        </div>
                                        
                                        </div>
                                      <hr />  
                                  </div>
                                 
                                   
                              )
                          })}  
                          
                            <div class=" text-right">
                            <button type="button" class="btn btn-primary">Primary</button>
                            </div>    
                    </div>
                  
                    <div className="col-lg-3">
                    <br /><br />
                    <div class="card text-center">    
                    
                    <div class="card-header">
                        Price Detail
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <hr />
                        <button type="button" class="btn btn-primary">Primary</button>
                    </div>
                    <div class="card-footer text-muted">
                         Total Price
                    </div>
                 </div>   

                    
                      
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
