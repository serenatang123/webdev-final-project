import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import recipeService from "../../services/recipe-service"
import ReviewList from "./detail-reviews"
import IngredientDetail from "./ingredient-detail"
import InstructionDetail from "./instruction-detail"


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

                    <div className="row">
                        <div className="col-xs-4">
                            <button className="btn btn-block">
                                Like <span className="fa fa-heart"/>
                            </button>
                            {/*<i onClick="like(m, false)" className="fa fa-heart float-right"/>*/}
                            {/*<i onClick="like(m, true)" className="fa fa-heart-o float-right"/>*/}
                        </div>
                        <div className="col-xs-4">
                            <button className="btn btn-block">
                                Add to Favorite <span className="fa fa-plus-square"/>
                            </button>
                        </div>
                        <div className="col-xs-4">

                        </div>
                    </div>
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

                    <div>
                        <InstructionDetail/>
                    </div>

                    <div>
                        <IngredientDetail/>
                    </div>

                    <div>
                        <ReviewList/>
                    </div>

                </div>
                <div className="col-sm-2"/>
            </div>
        </div>
    )
}
export default DetailsScreen
