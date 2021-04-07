import React from 'react'
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
            <h2> Home </h2>
            <Link to = "/search"> Search </Link>
            <br/>
            <Link to = "/profile"> Profile </Link>
        </div>
    )
}
export default HomeScreen