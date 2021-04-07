import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Axios from 'axios';

const Register = () =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const addUser = () =>{

    };

    return (
        <div>
            <div className="container">
                <h1>
                    Sign Up
                </h1>

                <form>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Username"
                                   onChange={(e)=>{
                                       setUsername(e.target.value);
                                   }}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control"
                                   id="password"
                                   placeholder="password"
                                   onChange={(e)=>{
                                       setPassword(e.target.value);
                                   }}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <Link to="/">
                                <button onClick={addUser} type="button" className="btn btn-primary btn-block">Sign up</button>
                            </Link>
                            <div className="row">
                                <div className="col-4">
                                    <Link to="/login">Login</Link>
                                </div>
                                <div className="col-4 text-center">
                                    <Link to="/">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register