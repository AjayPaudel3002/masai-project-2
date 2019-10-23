import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import style from "./Orders.css"
import { Router as BrowserRouter, Link } from "react-router-dom"
// import queryString from "query-string"

export default class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [
                {
                    id: 1,
                    src: "https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name: "Lg 190L Direct Cool Single Door",
                    seller: "Harshil Home Applience",
                    old_price: "18,000",
                    new_price: "16,490",
                    save: "SAVE FOR LATER",
                    remove: "REMOVE",
                    delivery: "Delivered on Jun 08"
                },
                {
                    id: 2,
                    src: "https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name: "Lg 190L Direct Cool Single Door",
                    seller: "Harshil Home Applience",
                    old_price: "18,000",
                    new_price: "16,490",
                    save: "SAVE FOR LATER",
                    remove: "REMOVE",
                    delivery: "Delivered on Jun 08"
                },
                {
                    id: 3,
                    src: "https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name: "Lg 190L Direct Cool Single Door",
                    seller: "Harshil Home Applience",
                    old_price: "18,000",
                    new_price: "16,490",
                    save: "SAVE FOR LATER",
                    remove: "REMOVE",
                    delivery: "Delivered on Jun 08"
                },
                {
                    id: 4,
                    src: "https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name: "Lg 190L Direct Cool Single Door",
                    seller: "Harshil Home Applience",
                    old_price: "18,000",
                    new_price: "16,490",
                    remove: "REMOVE",
                    delivery: "Delivered on Jun 08"
                },
                {
                    id: 4,
                    src: "https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name: "Lg 190L Direct Cool Single Door",
                    seller: "Harshil Home Applience",
                    old_price: "18,000",
                    new_price: "16,490",
                    remove: "REMOVE",
                    delivery: "Delivered on Jun 08"
                },
            ]
        }

    }
    render() {

        return (
            <div className="container">
                {this.state.cart.map(cart => {
                    return (
                        <div>

                            <div className="card mb-3  bg-white "  >
                                <div class="card-header">
                                    {cart.seller}
                                </div>
                                <div className="row no-gutters" >

                                    <div className="col-lg-2 col-md-4 col-sm-12">
                                        <img src={cart.src} className="card-img mt-2" style={{ width: "200px", height: "200px" }} />
                                    </div>
                                    <div className="col-lg-3 col-md-8 col-sm-12" >

                                        <div class="card-body text_design ">
                                            <h6 className="card-title mt-3">{cart.name}</h6>
                                            <p className="card-text mt-3 text-secondary">{cart.seller}</p>
                                            <div><span className="card-text mt-3 text-secondary">₹{cart.new_price + "  "}</span>
                                                <span className="card-text mt-3 text-secondary" style={{ textDecoration: "line-through" }}> ₹{cart.old_price}</span></div>
                                            <button className="card-text mt-3 text-secondary">{cart.remove}</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-8 col-sm-12">
                                        <div class="card-body text_design">
                                            <div className="card-text mt-3 text-secondary">₹{cart.new_price + "  "}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-8 col-sm-12">
                                        <div class="card-body text_design text-center">
                                            <img src="" />
                                            <div className="card-text mt-3 text-secondary ">{cart.delivery}</div>
                                            <div className="card-text mt-3 text-secondary "><p>Your item has been delivered</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer text-muted">
                                    <div id="leftbox">
                                        ordered on 2 oct 2019
                     </div>

                                    <div id="rightbox">
                                        Order Total ₹32
                     </div>
                                </div>


                            </div>



                        </div>

                    )
                })}

                <div className="card"><p className="text-primary text-center">No more results to display</p></div>

            </div>

        )
    }
}
