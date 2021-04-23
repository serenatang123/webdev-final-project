import React, {useEffect, useState} from 'react';
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
        reviewService.createReviewForRecipe(recipeId, myReview.textArea, user.username, recipeName, recipeImg)
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
                                            <div className="reviews-title">
                                                {item.username}
                                                {/*findUserByID({item.user})*/}
                                            </div>
                                            <div className="reviews-text">
                                                {item.textArea}
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
