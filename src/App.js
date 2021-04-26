import './App.css';
import '../src/components/home-screen.css';
import SearchScreen from "./components/search/search-screen";
import HomeScreen from "./components/home-screen";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Profile from "./components/profile/profile";
import ProfileAdmin from "./components/profile/profile-admin";
import DetailsScreen from "./components/details/detail-screen";
import Login from "./components/user/login";
import Register from "./components/user/register";
import React, {useEffect, useState} from 'react';
import userService from "./services/user-service";
import profileService from "./services/profile-service";

function App() {

    const [user, setUser] = useState(undefined)

    useEffect(() => {
        profileService.findProfile().then(res => setUser(res));
    }, []);

    const onClickLogout = () => {
        return userService.logout().then(() => setUser(undefined));
    }

    return (
            <div className="container-fluid">
                <BrowserRouter>
                    <nav className='navbar navbar-expand-lg navbar-light'>
                        <Link className='navbar-brand homeScreen-smartKitchen' to='/'> SmartKitchen </Link>
                        <div className='collapse navbar-collapse'>
                        </div>
                        {
                            user &&
                            <>
                                <Link className='btn btn-outline-none' to='/search'><i className="fa fa-2x fa-search"/></Link>
                                <div>
                                    <Link to='/profile'>Welcome: {user.username}</Link>
                                </div>
                                <button className='btn btn-outline-none' onClick={onClickLogout}>Logout</button>
                            </>
                        }
                        {
                            !user &&
                            <>
                                <Link className='btn btn-outline-none' to='/search'><i className="fa fa-2x fa-search"/></Link>
                                <Link className='btn btn-outline-none' to='/profile'><i className="fa fa-2x fa-user"/></Link>
                                <Link className='btn btn-outline-none' to='/login'>Login</Link>
                            </>
                        }
                    </nav>

                    <Switch>
                        <Route path="/" exact = {true}>
                            <HomeScreen/>
                        </Route>

                        <Route path="/login" exact = {true}>
                            <Login user={user} setUser={setUser}/>
                        </Route>

                        <Route path="/register" exact ={true}>
                            <Register user={user}/>
                        </Route>

                        <Route path={["/search", "/search/:recipeName"]} exact = {true}>
                            <SearchScreen/>
                        </Route>

                        <Route path="/details/:recipeId" exact = {true}>
                            <DetailsScreen user={user}/>
                        </Route>

                        <Route path="/profiles" exact = {true}>
                            <ProfileAdmin/>
                        </Route>

                        <Route path={["/profile", "/profiles/:uid"]} exact = {true}>
                            <Profile user={user} setUser={setUser}/>
                        </Route>
                    </Switch>
                    <div>

                    </div>
                    <div className="text-center content-wrap page-container main-footer footer-separation-padding">
                        <h2 className="footer-text">#SmartKitchen</h2>
                        <p className="footer-text">Tel: 123-456-7890 | Email: info@smartkitchen.com</p>
                        <p className="footer-text">COPYRIGHT@ 2021 SMARTKITCHEN - ALL RIGHTS RESERVED</p>
                    </div>
                </BrowserRouter>

            </div>
    );
}

export default App;
