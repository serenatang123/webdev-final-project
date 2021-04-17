// import reviewService from "../services/review-service";
//
// export const FIND_REVIEWS_FOR_RECIPE = "FIND_REVIEWS_FOR_RECIPE"
// export const FIND_ALL_REVIEWS_FOR_RECIPE = "FIND_ALL_REVIEWS_FOR_RECIPE"
// export const CREATE_REVIEW_FOR_RECIPE = "CREATE_REVIEW_FOR_RECIPE"
// export const DELETE_REVIEW = "DELETE_REVIEW"
// export const UPDATE_REVIEW = "UPDATE_REVIEW"
// export const SET_ACTIVE_REVIEW = "SET_ACTIVE_REVIEW"
//
// const findReviewsForRecipe = (dispatch, recipeId) => {
//     reviewService.findReviewsForRecipe(recipeId)
//         .then(reviews => {
//             dispatch({
//                 type: FIND_REVIEWS_FOR_RECIPE,
//                 reviews
//             })
//         })
// }
//
// const createReviewForRecipe = (dispatch, recipeId) => {
//     const newReview = {type: "HEADING", size: 1, text: "New Widget"}
//     reviewService.createReviewForRecipe(recipeId, newReview)
//         .then(review => dispatch({
//             type: CREATE_REVIEW_FOR_RECIPE,
//             review
//         }))
// }
//
// const deleteReview = (dispatch, id) =>
//     reviewService.deleteReview(id)
//         .then((status) => {
//             dispatch({
//                 type: DELETE_REVIEW,
//                 reviewToDelete: id
//             })
//         })
//
// const updateReview = (dispatch, id, review) =>
//     reviewService.updateReview(id, review).
//     then((status) => {
//         dispatch({
//             type: SET_ACTIVE_REVIEW,
//             activeReview: {}
//         })
//         dispatch({
//             type: UPDATE_REVIEW,
//             review
//         })
//     })
//
// const setActiveReview = (dispatch, review) => {
//     dispatch({
//         type: SET_ACTIVE_REVIEW,
//         activeReview: review
//     })
// }
//
// const cleanState = (dispatch) => {
//     dispatch({
//         type : FIND_ALL_REVIEWS_FOR_RECIPE,
//         widgets : []
//     });
// };
//
// const reviewActions = {
//     findReviewsForRecipe,
//     createReviewForRecipe,
//     deleteReview,
//     updateReview,
//     setActiveReview,
//     cleanState
// }
//
// export default reviewActions
