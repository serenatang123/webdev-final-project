import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
// import musicService from "../services/music-service"
import recipeService from "../services/recipe-service"

const SearchScreen = () => {
    const history = useHistory()
    const {recipeName} = useParams()
    const [searchRecipe, setSearchRecipe] = useState(recipeName)
    const [results, setResults] = useState({meals: []})
    useEffect(() => {
        if (recipeName !== "undefined" && typeof recipeName !== "undefined") {
            setSearchRecipe(recipeName)
            findRecipeByName(recipeName)
        }
    }, [])
    const findRecipeByName = (recipeName) => {
        history.push(`/search/${recipeName}`)
        recipeService.findRecipeByName(recipeName)
            .then((results) => {
                setResults(results)
            })
    }
    return (
        <div>
            <h2> Search Screen </h2>
            <input value={searchRecipe}
                   onChange={(event) => {
                       setSearchRecipe(event.target.value)
                   }}
                   className = "form-control"/>

            <button
                onClick={() => {
                    findRecipeByName(searchRecipe)
                }}
                className = "btn btn-primary">
                Search
            </button>

            <ul className="list-group">
                {
                    results && results.meals && results.meals.map((recipe) => {
                        return(
                            <li className="list-group-item">
                                <Link to={`/details/${recipe.idMeal}`}>
                                    {recipe.strMeal}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default SearchScreen
