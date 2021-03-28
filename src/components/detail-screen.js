import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
// import musicService from "../services/music-service"
import recipeService from "../services/recipe-service"


const DetailsScreen = () => {
    const {recipeID} = useParams()
    const history = useHistory()
    const [recipe, setRecipe] = useState ({})
    useEffect(() => {
        findRecipeByRecipeID()
    }, [])
    const findRecipeByRecipeID = () => {
        recipeService.findRecipeByRecipeID(recipeID)
            .then((data) => {
                setRecipe(data)
            })
    }
    return (
        <div class="container-fluid">
            <br/>
            <button className = "btn btn-primary" onClick={() => {history.goBack()}}>
                Back
            </button>
            <br/>
            <h2>
                {recipe.meals && recipe.meals[0] && recipe.meals[0].strMeal}
            </h2>
            <div>
                 <img src={recipe.meals && recipe.meals[0] && recipe.meals[0].strMealThumb}
                      width={500}/>
            </div>
            <br/>
            <div>
                <h4>Category</h4>
                <p>
                    {recipe.meals && recipe.meals[0] && recipe.meals[0].strCategory}
                </p>
            </div>
            <div>
                <h4>Country/Region</h4>
                <p>
                    {recipe.meals && recipe.meals[0] && recipe.meals[0].strArea}
                </p>
            </div>
            <h4>Directions</h4>
            <p>
                {recipe.meals && recipe.meals[0] && recipe.meals[0].strInstructions}
            </p>

        </div>
    )
}
export default DetailsScreen