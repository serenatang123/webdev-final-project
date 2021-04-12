import './App.css';
import SearchScreen from "./components/search-screen";
import HomeScreen from "./components/home-screen";
import {BrowserRouter, Route, Switch, useParams} from "react-router-dom";
import Profile from "./components/profile/profile";
import DetailsScreen from "./components/details/detail-screen";
import Login from "./components/login";
import ProfileAdmin from "./components/profile/profile-admin";
import Register from "./components/register";

function App() {
    return (
            <div className="container-fluid">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact = {true}>
                            <HomeScreen/>
                        </Route>

                        <Route path="/login" exact = {true}>
                            <Login/>
                        </Route>

                        <Route path="/register" exact ={true}>
                            <Register/>
                        </Route>

                        <Route path={["/search", "/search/:recipeName"]} exact = {true}>
                            <SearchScreen/>
                        </Route>

                        <Route path="/details/:recipeID" exact = {true}>
                            <DetailsScreen/>
                        </Route>

                        <Route path="/profile" exact = {true}>
                            <ProfileAdmin/>
                        </Route>

                        <Route path="/profile/:uid" exact = {true}>
                            <Profile/>
                        </Route>
                    </Switch>
                </BrowserRouter>

            </div>
    );
}

export default App;
