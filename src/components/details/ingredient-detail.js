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
                setRecipe(data)
            })
    }

    const items = [];
    for (let i = 1; i <= 20; i++) {
        if (recipe.meals && recipe.meals[0] && recipe.meals[0][`strIngredient${i}`] == "") {
            break;
        }
        items.push(
            <tr>
                <td>{recipe.meals && recipe.meals[0] && recipe.meals[0][`strIngredient${i}`]}</td>
                <td>{recipe.meals && recipe.meals[0] && recipe.meals[0][`strMeasure${i}`]}</td>
            </tr>)
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
                    {items}
                {/*<tr>*/}
                {/*    <td scope="row">{recipe.meals && recipe.meals[0] && recipe.meals[0].strIngredient1}</td>*/}
                {/*    <td>{recipe.meals && recipe.meals[0] && recipe.meals[0].strMeasure1}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td scope="row">{recipe.meals && recipe.meals[0] && recipe.meals[0].strIngredient2}</td>*/}
                {/*    <td>{recipe.meals && recipe.meals[0] && recipe.meals[0].strMeasure2}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td scope="row">{recipe.meals && recipe.meals[0] && recipe.meals[0].strIngredient3}</td>*/}
                {/*    <td colSpan="2">{recipe.meals && recipe.meals[0] && recipe.meals[0].strMeasure3}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td scope="row">{recipe.meals && recipe.meals[0] && recipe.meals[0].strIngredient4}</td>*/}
                {/*    <td colSpan="2">{recipe.meals && recipe.meals[0] && recipe.meals[0].strMeasure4}</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td scope="row">{recipe.meals && recipe.meals[0] && recipe.meals[0].strIngredient5}</td>*/}
                {/*    <td colSpan="2">{recipe.meals && recipe.meals[0] && recipe.meals[0].strMeasure5}</td>*/}
                {/*</tr>*/}
                </tbody>
            </table>
        </div>
    )
}
export default IngredientDetail
