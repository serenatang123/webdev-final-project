import React, {useState} from 'react'
import {Link} from "react-router-dom";
import registerService from "../services/register-service"


const Register = () =>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const createUser = () =>{
        const newUser = {
            firstName,
            lastName,
            address,
            email,
            password,
            phone,
        }
        registerService.createUser(newUser)
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
                            Firstname </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Firstname"
                                   onChange={(e)=>{
                                       setFirstName(e.target.value);
                                   }}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Lastname </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Lastname"
                                   onChange={(e)=>{
                                       setLastName(e.target.value);
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
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input type="email"
                                   className="form-control"
                                   id="email"
                                   placeholder="email"
                                   onChange={(e)=>{
                                       setEmail(e.target.value);
                                   }}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Address </label>
                        <div className="col-sm-10">
                            <input type="address"
                                   className="form-control"
                                   id="address"
                                   placeholder="address"
                                   onChange={(e)=>{
                                       setAddress(e.target.value);
                                   }}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Phone </label>
                        <div className="col-sm-10">
                            <input type="phone"
                                   className="form-control"
                                   id="phone"
                                   placeholder="phone"
                                   onChange={(e)=>{
                                       setPhone(e.target.value);
                                   }}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <Link to="/">
                                <button onClick={createUser} type="button" className="btn btn-primary btn-block">Sign up</button>
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