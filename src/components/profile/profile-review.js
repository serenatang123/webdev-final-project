import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import reviewService from "../../services/review-service";

const ProfileReview = ({user, editable, currentProfile}) => {

    const {uid} = useParams();
    const [reviews, setReviews] = useState([]);
    const currentUsername = currentProfile.username;

    useEffect(() => {
        if(editable) {
            reviewService.findReviewsByUsername(user.username)
                .then(res => setReviews(res));
        } else if(uid) {
            reviewService.findReviewsByUsername(currentUsername)
                .then(res => setReviews(res));
        }
    }, [])

    const handleDelete = (e, recipeId) => {
        console.log(recipeId);
        reviewService.deleteReview(recipeId, e.target.id)
            .then(res => console.log(res))
        setReviews(reviews.filter(review => review._id !== e.target.id))
    }

    return (
        <>
            <h3>Review</h3>
            <ul className='list-group review-block'>
                {
                    reviews.map(review =>
                        <li className='list-group-item' key={review._id}>
                            {editable &&
                                <i  id={review._id} className="fa fa-trash"
                                   style={{color:"red", marginRight:"5px"}}
                                   onClick={() => {
                                       console.log(review.recipeId);
                                       console.log(review._id);
                                       reviewService.deleteReview(review.recipeId, review._id);
                                       setReviews(reviews.filter(item => item._id !== review._id))}
                                   }/>
                                }
                            <Link to={`/details/${review.recipeId}`} style={{marginRight:"10px"}}>
                                <img className="review-img" src={review.recipeImg}
                                     width={40}/>
                                {review.recipeName}
                            </Link>
                            <br/>
                            {review.textArea}
                        </li>)
                }
                {/*{*/}
                {/*    editable &&*/}
                {/*    <>*/}
                {/*        {*/}
                {/*            editing && <>*/}
                {/*        }*/}
                {/*        {*/}
                {/*            !editing && <>*/}
                {/*        }*/}
                {/*    </>*/}
                {/*}*/}
                {/*{*/}
                {/*    !editable && reviews.map(review =>*/}
                {/*        <li className='list-group-item'>*/}
                {/*            <Link key={review._id}*/}
                {/*                  to={`/details/${review.recipeId}`} style={{marginRight:"10px"}}>*/}
                {/*                <img src={review.recipeImg}*/}
                {/*                     width={30}/>*/}
                {/*                {review.recipeName}*/}
                {/*            </Link>*/}
                {/*            {review.textArea}*/}
                {/*        </li>)*/}
                {/*}*/}
            </ul>
        </>
    )
}

export default ProfileReview;