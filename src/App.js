import './App.css';
import SearchScreen from "./components/search-screen";
import HomeScreen from "./components/home-screen";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Profile from "./components/profile/profile";
import ProfileAdmin from "./components/profile/profile-admin";
import DetailsScreen from "./components/details/detail-screen";
import Login from "./components/user/login";
import Register from "./components/user/register";
import {useEffect, useState} from 'react';
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
                    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                        <Link className='navbar-brand' to='/'> smartKitchen 这个 nav-bar 是暂时的</Link>
                        <div className='collapse navbar-collapse'>
                            <div className='navbar-nav'>
                                <Link className='nav-item nav-link' to='/search'>Search</Link>
                            </div>
                        </div>
                        {
                            user &&
                            <>
                                <div>
                                    <Link to='/profile'>username here: {user.username}</Link>
                                </div>
                                <button className='btn btn-outline-secondary' onClick={onClickLogout}>Logout</button>
                            </>
                        }
                        {
                            !user &&
                            <>
                                <Link className='btn btn-outline-success' to='/register'>Register</Link>
                                <Link className='btn btn-outline-primary' to='/login'>Login</Link>
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

                        {/*TODO: admin to each user profile and delete*/}
                        <Route path={["/profile", "/profile/:uid"]} exact = {true}>
                            <Profile user={user} setUser={setUser}/>
                        </Route>

                    </Switch>
                </BrowserRouter>

            </div>
    );
}

export default App;
