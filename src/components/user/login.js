import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import userService from "../../services/user-service";

const Login = () =>{
    const [credentials, setCredentials] = useState({username: '', password: ''})
    const history = useHistory()

    const login = () => {
        userService.login(credentials)
            .then((user) => {
                console.log(user)
                if(user === 0) {
                    alert("login failed, try again")
                } else {
                    history.push("/profile")
                }
            })
        history.push("/profile")
    }

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
                            <input
                                value={credentials.username}
                                onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                                className="form-control"
                                   placeholder="username"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input
                                value={credentials.password}
                                onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                                type="password"
                                   className="form-control"
                                   placeholder="password"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <a href="../profile/profile.template.client.html">
                                <button onClick={login} type="button" className="btn btn-primary btn-block">Login</button>
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