import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import { Router as BrowserRouter, Link } from "react-router-dom"
// import queryString from "query-string"

export default class ViewProducts extends React.Component {
    constructor(props){
        super(props);
         this.state={
             cart:[
                 {
                    id:1,
                    brand:"redmi",
                    src:"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name:"Lg 190L Direct Cool Single Door",
                    available_Quantity:"8",
                    price:"₹300"
                 },
                 {
                    id:2,
                    brand:"redmi",
                    src:"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name:"Lg 190L Direct Cool Single Door",
                    available_Quantity:"8",
                    price:"₹300"
                 },
                 {
                    id:3,
                    brand:"redmi",
                    src:"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name:"Lg 190L Direct Cool Single Door",
                    available_Quantity:"8",
                    price:"₹300"
                 },
                 {
                    id:4,
                    brand:"redmi",
                    src:"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name:"Lg 190L Direct Cool Single Door",
                    available_Quantity:"8",
                    price:"₹300"
                 },
                 {
                    id:4,
                    src:"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name:"Lg 190L Direct Cool Single Door",
                    available_Quantity:"8",
                    price:"₹300"
                 },
             ]
         }
         
     }
    render(){
        return(
            <div>
                <div className="container mx-auto">
                        <div className="row">
                           {this.state.cart.map(item =>{
                               return(
                                   <div className="col-lg-3">
                                       <div className="card mx-auto">
                                           <img src={item.src} className="mx-auto" style={{height:"200px",width:"200px"}}/><hr />
                                           <div className="mx-auto text-primary">{item.name}</div>
                                           <div className="mx-auto">Price:{item.price}</div>
                                           <div className="mx-auto">Available Quantity:{item.available_Quantity}</div>
                                       </div>
                                   </div>
                               )
                           })} 
                        </div>
                </div>
            </div>     
        )
    }
}