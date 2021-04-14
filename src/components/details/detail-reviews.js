import React, {useState} from 'react';

const ReviewList = ({
                        setReview, reviewActive
    }) => {
    return (
        <div>
            <h5>
                All Reviews
            </h5>
            <br/>
            <h5>
                Submit Your Review
            </h5>
            <div>
                <textarea id="reviewText"
                    value={reviewActive && reviewActive.text}
                    className="form-control"/>
            </div>
            <button className = "btn btn-primary btn-block"
                    value="Submit Review"
                    onClick={(e) =>
                    setReview(...reviewActive, document.getElementById("reviewText"))}>
                Submit
            </button>
        </div>
    )
}
export default ReviewList
