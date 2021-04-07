import './App.css';
import SearchScreen from "./components/search-screen";
import DetailsScreen from "./components/detail-screen";
import HomeScreen from "./components/home-screen";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/profile";

function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>

            <Route path="/" exact = {true}>
                <HomeScreen/>
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
