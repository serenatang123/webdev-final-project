import React, {useEffect, useState} from 'react'
import recipeService from "../../services/recipe-service"
import {useParams} from "react-router-dom";

const InstructionDetail = ({instruction}) => {
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

    return(
        <div>
            <h5>Instructions</h5>
            <ul>
                {
                    recipe.meals && recipe.meals[0] && recipe.meals[0].strInstructions.split("\n").map((item, i) => {
                        return(
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default InstructionDetail
