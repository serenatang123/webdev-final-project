import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import recipeService from "../../services/recipe-service"
import './search.css'

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
        <div className="container-fluid search-top-margin search-bottom-margin">
            <div className="row">
                <div className="col-sm-2"/>
                <div className="col-sm-8">
                    <div>
                        <h2> Search Recipe </h2>
                        <input value={searchRecipe}
                               onChange={(event) => {
                                   setSearchRecipe(event.target.value)
                               }}
                               className = "form-control"/>
                        <button
                            onClick={() => {
                                findRecipeByName(searchRecipe)
                            }}
                            className = "btn btn-primary btn-block ">
                            Search
                        </button>
                    </div>

                    <ul className="list-group">
                        {
                            results && results.meals && results.meals.map((recipe) => {
                                return(
                                    <li className="list-group-item">
                                        <Link to={`/details/${recipe.idMeal}`}>
                                            <div>
                                                {recipe.strMeal}
                                                <img className="float-right" src={recipe.strMealThumb} width={50}/>
                                            </div>

                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-sm-2"/>
            </div>
        </div>
    )
}
export default SearchScreen
