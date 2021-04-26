import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import reviewService from "../../services/review-service";
import './detail.css';


const ReviewList = ({recipeId, user, recipeName, recipeImg}) => {
    const [review, setReview] = useState([])
    const [myReview, setMyReview] = useState({})
    useEffect(() => {
        findReviewsForRecipe()
    }, [recipeId])

    const findReviewsForRecipe = () => {
        reviewService.findReviewsForRecipe(recipeId)
            .then((data) => {
                setReview(data)
            })
    }

    const submitHandler = () => {
        reviewService.createReviewForRecipe(recipeId, myReview.textArea, user.username, recipeName, recipeImg, user._id)
            .then(res => console.log(res))
        // myReview.value = ""
        // reviewText.value.setState({ text: '' });
        setReview(review => [...review, myReview])
    }
    return (
        <div>
            <h5 className= "section-title">
                Reviews
            </h5>

            <ul>
                {
                    review && review[0] && review.map((item, i) => {
                        return(
                            <li className="list-spacing"
                                key={i}>
                                <Link className="reviews-title" to={(user && user._id && item.userId && user._id === item.userId) ?
                                    "/profile" : `/profiles/${item.userId}`}>
                                    {item.username}
                                    {/*findUserByID({item.user})*/}
                                </Link>
                                <div className="reviews-text">
                                    {item.textArea}
                                </div>

                            </li>
                        )
                    })
                }
            </ul>
            {
                !user &&
                <>
                    <div className='alert alert-warning'>
                        Please login to submit your review.
                    </div>
                </>
            }
            {
                user &&
                <>
                    <h5 className="separation-padding">
                    Submit Your Review
                    </h5>
                    <div>
                        <textarea id="reviewText" placeholder="Please enter here."
                        value={myReview.textArea}
                            onChange={(e) => {
                                setMyReview({...myReview, textArea: e.target.value, username: user.username});
                            }}
                        className="form-control"/>
                    </div>
                    <br/>
                    <div className="d-grid gap-2 d-md-block">
                        <button className = "btn btn-primary"
                            onClick={submitHandler}>
                            Submit
                        </button>
                    </div>
                </>
            }
        </div>
    )
}
export default ReviewList
