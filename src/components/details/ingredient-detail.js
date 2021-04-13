import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import recipeService from "../../services/recipe-service"

const IngredientDetail = ({ingredient}) => {
    const {recipeID} = useParams()
    const [recipe, setRecipe] = useState ({})
    useEffect(() => {
        findRecipeByRecipeID()
    }, [])
    const findRecipeByRecipeID = () => {
        recipeService.findRecipeByRecipeID(recipeID)
            .then((data) => {
                // for(var i =0; i<len(data); i++) {
                //     arr.append[{'in': ,'me'}]
                // }
                setRecipe(data)
            })
    }
    return(

        <div>
            <div>
                <h5>Ingredients</h5>
            </div>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Ingredient</th>
                    <th scope="col">Amount</th>
                </tr>
                </thead>
                <tbody>


                <tr>
                    <td scope="row">{recipe.meals && recipe.meals[0] && recipe.meals[0].strIngredient1}</td>
                    <td>{recipe.meals && recipe.meals[0] && recipe.meals[0].strMeasure1}</td>
                </tr>
                <tr>
                    <td scope="row">{recipe.meals && recipe.meals[0] && recipe.meals[0].strIngredient2}</td>
                    <td>{recipe.meals && recipe.meals[0] && recipe.meals[0].strMeasure2}</td>
                </tr>
                <tr>
                    <td scope="row">{recipe.meals && recipe.meals[0] && recipe.meals[0].strIngredient3}</td>
                    <td colSpan="2">{recipe.meals && recipe.meals[0] && recipe.meals[0].strMeasure3}</td>
                </tr>
                <tr>
                    <td scope="row">{recipe.meals && recipe.meals[0] && recipe.meals[0].strIngredient4}</td>
                    <td colSpan="2">{recipe.meals && recipe.meals[0] && recipe.meals[0].strMeasure4}</td>
                </tr>
                <tr>
                    <td scope="row">{recipe.meals && recipe.meals[0] && recipe.meals[0].strIngredient5}</td>
                    <td colSpan="2">{recipe.meals && recipe.meals[0] && recipe.meals[0].strMeasure5}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default IngredientDetail
