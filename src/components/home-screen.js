import React from 'react'
import {Link} from "react-router-dom";
import "./home-screen.css";
import '../style.css'
import 'font-awesome/css/font-awesome.min.css'

const HomeScreen = () => {

    return (
        <div>
            <div className="container-fluid">
                <div className="row img-ys">
                    <div className="col-6">
                        <h1 className="home-text homeScreen-title">SEASONAL MENU</h1>
                        <span className="home-text homeScreen-subTitle">Inspired by the best ingredients</span>
                    </div>
                    <div className="col-6">
                        <div>
                            <img src="https://images.unsplash.com/photo-1588685232180-8bb64cb4837a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1288&q=80"
                                 className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="row img-ys">
                    <div className="col-6">
                        <div>
                            <img src="https://img1.wsimg.com/isteam/ip/56db4a65-8ac0-4b8a-84b3-b627379e2ca5/uliana-kopanytsia-2FA0VJzwc0g-unsplash-0001.jpg/:/"
                                 className="second-img" alt=""/>
                        </div>
                    </div>
                    <div className="col-6 second-paragraph">
                        <h1 className="homeScreen-title">One Perfect Pie</h1>
                        <span className="">We release one batch of our signature fruit pie per month, using our family recipe.</span>
                        <br/>
                        <span>Subscribe to our email list for the earliest notification of when they will be back in stock.</span>
                        <br/>
                        <span>Our pies sell out within minutes, so set an alarm and get here fast!</span>
                        <br/>
                        <br/>
                        <h2 className="homeScreen-title">#SmartKitchen</h2>
                        <span className="homeScreen-subTitle">Tel: 123-456-7890 | Email: info@smartkitchen.com</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomeScreen
