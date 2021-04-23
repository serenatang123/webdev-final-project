const REVIEW_URL = "http://localhost:3000/api/reviews";

export const findReviewsForRecipe = (recipeId) =>
    fetch(`${REVIEW_URL}/${recipeId}`, {
        credentials: 'include'
    })
        .then(response => response.json())

// export const findUserById = (uid) =>
//     fetch(`${REVIEW_URL}/${recipeId}`, {
//         credentials: 'include'
//     })
//         .then(response => response.json())

export const createReviewForRecipe = (recipeId, review, userId) => {
    return fetch(`${REVIEW_URL}/${recipeId}`, {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({review, userId}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteReview = (recipeId) =>
    fetch(`${REVIEW_URL}/${recipeId}`, {
        method: "DELETE",
        credentials: 'include'
    })
        .then(response => response.json())

export const updateReview = (recipeId, review) =>
    fetch(`${REVIEW_URL}/${recipeId}`, {
        method: "PUT",
        credentials: 'include',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findReviewsByUserId = (userId) =>
    fetch(`${REVIEW_URL}/${userId}`, {
        credentials: 'include'
    })
        .then(response => response.json())


const api = {
    findReviewsForRecipe, createReviewForRecipe, deleteReview, updateReview
}

export default api;
