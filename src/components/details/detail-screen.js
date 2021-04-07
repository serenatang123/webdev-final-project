import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
// import musicService from "../services/music-service"
import recipeService from "../../services/recipe-service"



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

        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2"/>
                <div className="col-sm-8">
                    <br/>
                    <button className = "btn btn-primary" onClick={() => {history.goBack()}}>
                        Back
                    </button>
                    <br/>
                    <h2>
                        {recipe.meals && recipe.meals[0] && recipe.meals[0].strMeal}
                    </h2>
                    <br/>
                    <div className="text-center">
                        <img src={recipe.meals && recipe.meals[0] && recipe.meals[0].strMealThumb}
                             width={500}/>
                    </div>
                    <br/>
                    <div>
                        <h5>Category</h5>
                        <p>
                            {recipe.meals && recipe.meals[0] && recipe.meals[0].strCategory}
                        </p>
                    </div>
                    <div>
                        <h5>Country/Region</h5>
                        <p>
                            {recipe.meals && recipe.meals[0] && recipe.meals[0].strArea}
                        </p>
                    </div>
                    <h5>Directions</h5>
                    <p>
                        {recipe.meals && recipe.meals[0] && recipe.meals[0].strInstructions}
                    </p>
                </div>
                <div className="col-sm-2"/>
            </div>
        </div>
    )
}
export default DetailsScreen