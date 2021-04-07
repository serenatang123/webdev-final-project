import React from 'react'
import {Link} from "react-router-dom";

const Login = () =>{
    return(
        <div>
            <div className="container">
                <h1>
                    Log In
                </h1>

                <form>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="username"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control"
                                   id="password"
                                   placeholder="password"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <a href="../profile/profile.template.client.html">
                                <button type="button" className="btn btn-primary btn-block">Sign in</button>
                            </a>
                            <div className="row">
                                <div className="col-4">

                                </div>
                                <div className="col-4 text-center">
                                    <Link to="/">Cancel</Link>
                                </div>
                                <div className="col-4">
                                    <Link to="/register" className="float-right">Sign
                                        up</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login