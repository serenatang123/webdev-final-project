import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import './detail.css'
import 'font-awesome/css/font-awesome.min.css'
import recipeService from "../../services/recipe-service"
import ReviewList from "./detail-reviews"
import IngredientDetail from "./ingredient-detail"
import InstructionDetail from "./instruction-detail"
import favoriteService from "../../services/favorite-service";
import ReactPlayer from "react-player"
import ProfileBio from "../profile/profile-bio";


const DetailsScreen = ({user, setUser}) => {
    const {recipeId} = useParams()
    const history = useHistory()
    const [recipe, setRecipe] = useState ({})
    const [favorite, setFavorite] = useState(false);

    const recipeName = recipe.meals && recipe.meals[0] && recipe.meals[0].strMeal;
    const recipeImg = recipe.meals && recipe.meals[0] && recipe.meals[0].strMealThumb;

    useEffect(() => {
        findRecipeByRecipeId();
        if(user) {
            favoriteService.isFavorite(recipeId, user._id)
                .then(res => setFavorite(res))
        }
    }, [recipeId, user])

    const findRecipeByRecipeId = () => {
        recipeService.findRecipeByRecipeId(recipeId)
            .then((data) => {
                setRecipe(data)
            })
    }

    const onClickAddFavorite = () => {
        favoriteService.addFavorite(recipeId, user._id, user.username, recipeName, recipeImg)
            .then(() => setFavorite(true));
    }

    const onClickRemoveFavorite = () => {
        favoriteService.removeFavorite(recipeId, user._id)
            .then(() => setFavorite(false));
    }

    return (

        <div className="container-fluid top-margin bottom-margin">
            <div className="row">
                <div className="col-sm-2"/>
                <div className="col-sm-8">
                    <br/>
                    <button className = "btn btn-outline-primary" onClick={() => {history.goBack()}}>
                        Back
                    </button>
                    <br/>
                    <h2 className="separation-padding recipe-title">
                        {recipeName}
                    </h2>
                    <div className="row">
                        {/*<div className="col-xs-4">*/}
                        {
                            user &&
                            <div className="col-xs-4">
                                <Link className='btn btn-outline-info mr-1' to='/profile'>
                                    See Favorites <span className="fa fa-folder"/>
                                </Link>
                                <>
                                    {
                                        !favorite &&
                                        <button className='btn btn-outline-success' onClick={onClickAddFavorite}>
                                            Add to Favorite <span className="fa fa-plus-square"/>
                                        </button>
                                    }
                                    {
                                        favorite &&
                                        <button className='btn btn-outline-danger' onClick={onClickRemoveFavorite}>
                                            Remove Favorite <span className="fa fa-trash"/>
                                        </button>
                                    }
                                </>
                            </div>
                        }
                        <div className="col-xs-4">
                        </div>
                    </div>
                    <br/>
                    <div className="text-center description-image">
                        {/*<img src={recipe.meals && recipe.meals[0] && recipe.meals[0].strMealThumb}*/}
                        {/*     width={500}/>*/}
                        {/*className="rounded mx-auto d-block"*/}
                        <img src={recipeImg}
                             width={500}/>
                    </div>
                    <br/>

                    <div>
                        <h5 className="separation-padding section-title">
                            Category
                        </h5>
                        <p>
                            {recipe.meals && recipe.meals[0] && recipe.meals[0].strCategory}
                        </p>
                    </div>

                    <div>
                        <h5 className="section-title">Country/Region</h5>
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
                    <div className="detail-video">
                        <ReactPlayer
                            url={recipe.meals && recipe.meals[0] && recipe.meals[0].strYoutube}
                        />
                    </div>
                    <div>
                        <a
                            href={
                                recipe.meals && recipe.meals[0] && recipe.meals[0].strYoutube
                            }
                            target="_blank">
                            YouTube Video Preview Link
                        </a>
                    </div>

                    <div className="separation-padding">
                        <ReviewList recipeId={recipeId} user={user} setUser={setUser} recipeName={recipeName} recipeImg={recipeImg}/>
                    </div>
                </div>
                <div className="col-sm-2"/>
            </div>
        </div>
    )
}
export default DetailsScreen
