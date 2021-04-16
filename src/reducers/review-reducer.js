// import {
//     CREATE_REVIEW_FOR_RECIPE,
//     FIND_REVIEWS_FOR_RECIPE,
//     UPDATE_REVIEW,
//     DELETE_REVIEW,
//     SET_ACTIVE_REVIEW
// } from "../actions/review-actions";
//
// const initialState = {
//     reviews: [
//         {id: 1111, type: "HEADING"},
//         {id: 2222, type: "HEADING"}
//     ],
//     activeReview: {}
// }
//
// const reviewReducer = (state=initialState, action) => {
//     switch (action.type) {
//         case CREATE_REVIEW_FOR_RECIPE:
//             return {
//                 ...state,
//                 reviews: [
//                     ...state.reviews,
//                     action.review
//                 ]
//             }
//         case FIND_REVIEWS_FOR_RECIPE:
//             return {
//                 ...state,
//                 reviews: action.reviews
//             }
//         case DELETE_REVIEW:
//             return {
//                 ...state,
//                 reviews: state.reviews.filter(review => {
//                     if (review.id === action.reviewToDelete) {
//                         return false
//                     } else {
//                         return true
//                     }
//                 })
//             }
//         case UPDATE_REVIEW:
//             return {
//                 ...state,
//                 reviews: state.reviews.map(review => {
//                     if(review.id === action.review.id) {
//                         return action.review
//                     } else {
//                         return review
//                     }
//                 })
//             }
//         case SET_ACTIVE_REVIEW:
//             return{
//                 ...state,
//                 activeReview: action.activeReview
//             }
//         default:
//             return state
//     }
// }
// export default reviewReducer
