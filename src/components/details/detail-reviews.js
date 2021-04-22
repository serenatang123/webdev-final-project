import React, {useEffect, useState} from 'react';
import reviewService from "../../services/review-service";
import './detail.css';

const ReviewList = ({recipeId}) => {
    const [review, setReview] = useState({})
    const [myReview, setMyReview] = useState({text: ''})
    useEffect(() => {
        findReviewsForRecipe()
    }, [])
    // const review = reviewService.findReviewsForRecipe(recipeId)
    const findReviewsForRecipe = () => {
        reviewService.findReviewsForRecipe(recipeId)
            .then((data) => {
                setReview(data)
            })
    }
    return (
        <div>
            <h5 className="separation-padding">
                Reviews
            </h5>
            <tr>
                <td>
                    {
                        review && review[0] && review.map((item, i) => {
                            return(
                                <li key={i}>{item.text}</li>
                            )
                        })
                    }
                </td>
            </tr>
            <h5 className="separation-padding">
                Submit Your Review
            </h5>
            <div>
                <textarea id="reviewText"
                    value={myReview.text}
                              onChange={(e) => {
                                setMyReview({...myReview, text: e.target.value})
                              }
                          }
                    className="form-control"/>
            </div>
            <button className = "btn btn-primary btn-block"
                    onClick={(e) =>
                        reviewService.createReviewForRecipe(recipeId, myReview)}>
                Submit
            </button>
        </div>
    )
}
export default ReviewList
