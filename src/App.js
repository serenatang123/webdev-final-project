import './App.css';
import SearchScreen from "./components/search-screen";

import HomeScreen from "./components/home-screen";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/profile";
import DetailsScreen from "./components/details/detail-screen";
import Login from "./components/login";

function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>

            <Route path="/" exact = {true}>
                <HomeScreen/>
            </Route>

            <Route path="/login" exact = {true}>
                <Login/>
            </Route>

            <Route path={["/search", "/search/:recipeName"]} exact = {true}>
                <SearchScreen/>
            </Route>

            <Route path="/details/:recipeID" exact = {true}>
                <DetailsScreen/>
            </Route>

            <Route path={["/profile", "/profile/:profileType"]} exact = {true}>
                <Profile/>
            </Route>

        </BrowserRouter>

    </div>
  );
}

export default App;
