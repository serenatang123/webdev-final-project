import React from 'react'
import {Link} from "react-router-dom";
import '../style.css'
import 'font-awesome/css/font-awesome.min.css'

const HomeScreen = () => {
    return (
        <div>
            <div className="container-fluid">

                <div className="row nav-ys">
                    <h2 className="col-10">SuperKitchen</h2>
                    <Link to={"/search"}><i className="fa fa-2x fa-search col-1"></i></Link>
                    <Link to={"/login"}><i className="fa fa-2x fa-user col-1"></i></Link>
                    <Link to={"/profile"}>Profile</Link>
                </div>

                <div className="row img-ys">
                    <div className="col-6">
                        <h1 className="home-text">The Best Menu</h1>
                        <span className="home-text">Perfect for any reason</span>
                    </div>
                    <div className="col-6">
                        <img src="https://img1.wsimg.com/isteam/ip/56db4a65-8ac0-4b8a-84b3-b627379e2ca5/uliana-kopanytsia-2FA0VJzwc0g-unsplash-0001.jpg/:/"
                             className="img-fluid" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeScreen