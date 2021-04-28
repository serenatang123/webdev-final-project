const REVIEW_URL = "http://localhost:3001/api/reviews";
// const REVIEW_URL = "https://smart-kitchen-node-server.herokuapp.com/api/reviews";

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

export const createReviewForRecipe = (recipeId, textArea, username, recipeName, recipeImg, userId) => {
    return fetch(`${REVIEW_URL}/${recipeId}`, {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({recipeId, textArea, username, recipeName, recipeImg, userId}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteReview = (recipeId, reviewId) =>
    fetch(`${REVIEW_URL}/${recipeId}/${reviewId}`, {
        method: "DELETE",
        credentials: 'include',
        body: JSON.stringify({recipeId, reviewId}),
        headers: {
            'content-type': 'application/json'
        }
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

export const findReviewsByUsername = (username) =>
    fetch(`${REVIEW_URL}/username/${username}`, {
        credentials: 'include'
    })
        .then(response => response.json())


const api = {
    findReviewsForRecipe, createReviewForRecipe, deleteReview, updateReview, findReviewsByUsername
}

export default api;
