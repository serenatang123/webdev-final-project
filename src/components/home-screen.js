import React from 'react'
import {Link} from "react-router-dom";
import "./home-screen.css";
import '../style.css'
import 'font-awesome/css/font-awesome.min.css'

const HomeScreen = () => {

    return (
        <div>
            <div className="container-fluid">
                <div className="row nav-ys">
                    <h2 className="col-9 homeScreen-smartKitchen">Smart Kitchen</h2>
                    <Link to={"/search"}><i className="fa fa-2x fa-search col-1"/></Link>
                    <Link to={"/login"}><i className="fa fa-2x fa-user col-1"/></Link>
                    <Link to={"/profile"}><i className="fa fa-2x fa-id-card col-1"/></Link>
                </div>

                <div className="row img-ys">
                    <div className="col-6">
                        <h1 className="home-text homeScreen-title">SEASONAL MENU</h1>
                        <span className="home-text homeScreen-subTitle">Inspired by the best ingredients</span>
                    </div>
                    <div className="col-6">
                        <img src="https://img1.wsimg.com/isteam/ip/56db4a65-8ac0-4b8a-84b3-b627379e2ca5/uliana-kopanytsia-2FA0VJzwc0g-unsplash-0001.jpg/:/"
                             className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeScreen
