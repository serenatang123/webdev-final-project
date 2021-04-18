import './App.css';
import SearchScreen from "./components/search-screen";
import HomeScreen from "./components/home-screen";
import {BrowserRouter, Link, Route, Switch, useParams} from "react-router-dom";
import Profile from "./components/profile/profile";
import DetailsScreen from "./components/details/detail-screen";
import Login from "./components/login";
import Register from "./components/register";
import {useEffect, useState} from 'react';
import {logout, profile} from './services/user-service';
import ProfileAdmin from "./components/profile/profile-admin";

function App() {

    const [user, setUser] = useState(undefined)

    useEffect(() => {
        profile().then(res => setUser(res));
    }, [])

    const onClickLogout = () => {
        return logout().then(() => setUser(undefined));
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
                        {/*{JSON.stringify(user)}*/}
                        {
                            user &&
                            <>
                                <div>
                                    {/*{JSON.stringify(user)}*/}
                                    {/*<Link to='/profile'>{user.displayName}</Link>*/}
                                    <Link to='/profile'>user name here after login{user.firstName} {user.lastName}</Link>
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

                        <Route path="/profile" exact = {true}>
                            <ProfileAdmin/>
                        </Route>

                        <Route path="/profile/:uid" exact = {true}>
                            <Profile user={user} setUser={setUser}/>
                        </Route>
                    </Switch>
                </BrowserRouter>

            </div>
    );
}

export default App;
