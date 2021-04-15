const RECIPE_URL = "http://localhost:3000/api/recipes";
const REVIEW_URL = "http://localhost:3000/api/reviews";

export const findReviewsForRecipe = (recipeId) =>
    fetch(`${RECIPE_URL}/${recipeId}/reviews`)
        .then(response => response.json());

export const createReviewForRecipe = (recipeId, review) =>
    fetch(`${REVIEW_URL}/${recipeId}`, {
        method: "POST",
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteReview = (recipeId) =>
    fetch(`${REVIEW_URL}/${recipeId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateReview = (recipeId, review) =>
    fetch(`${REVIEW_URL}/${recipeId}`, {
        method: "PUT",
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


const api = {
    findReviewsForRecipe, createReviewForRecipe, deleteReview, updateReview
}

export default api;
