import React, {useEffect, useState} from 'react';
import reviewService from "../../services/review-service";
import './detail.css';


const ReviewList = ({recipeId, user}) => {
    const [review, setReview] = useState({})
    const [myReview, setMyReview] = useState({text: ''})
    useEffect(() => {
        findReviewsForRecipe()
    }, [])

    const findReviewsForRecipe = () => {
        reviewService.findReviewsForRecipe(recipeId)
            .then((data) => {
                setReview(data)
            })
    }

    const submitHandler = (reviewText) => {
        reviewService.createReviewForRecipe(recipeId, myReview).then()
        reviewText.value = ""
        // reviewText.value.setState({ text: '' });
        findReviewsForRecipe()
    }
    return (
        <div>
            <h5>
                Reviews
            </h5>

            {
                !user &&
                <>
                    <div className='alert alert-warning'>
                        Please login to see and submit your review.
                    </div>
                </>
            }
            {
                user &&
                <>
                    <tr>
                        <td>
                            {
                                review && review[0] && review.map((item, i) => {
                                    return(
                                        <div className="list-spacing"
                                             key={i}>
                                            <div className="reviews-user fst-italic">
                                                {item.userId}
                                                {/*findUserByID({item.user})*/}
                                            </div>
                                            <div className="reviews-text">
                                                {item.text}
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </td>
                    </tr>

                    <h5 className="separation-padding">
                    Submit Your Review
                    </h5>
                    <div>
                        <textarea id="reviewText" placeholder="Please enter here."
                        value={myReview.text}
                            onChange={(e) => {
                                setMyReview({...myReview, text: e.target.value})}}
                        className="form-control"/>
                    </div>
                    <br/>
                    <div className="d-grid gap-2 d-md-block">
                        <button className = "btn btn-primary"
                            onClick={(e) =>
                                submitHandler(document.getElementById("reviewText"))}>
                            Submit
                        </button>
                    </div>
                </>
            }
        </div>
    )
}
export default ReviewList
