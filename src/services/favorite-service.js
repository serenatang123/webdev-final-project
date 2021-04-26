// const USER_URL = "http://localhost:3000/api";
const USER_URL = "https://smart-kitchen-node-server.herokuapp.com/api";

export const isFavorite = (recipeId, userId) =>
    fetch(`${USER_URL}/favorite/${recipeId}/${userId}`)
        .then(res => res.json());

export const findFavoritesByUserId = (userId) =>
    fetch(`${USER_URL}/favorite/${userId}`)
        .then(res => res.json());

export const addFavorite = (recipeId, userId, username, recipeName, recipeImg) =>
    fetch(`${USER_URL}/favorite`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({recipeId, userId, username, recipeName, recipeImg})
    })
        .then(res => res.json());

export const removeFavorite = (recipeId, userId) =>
    fetch(`${USER_URL}/favorite`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({recipeId, userId})
    })
        .then(res => res.json());

const api = {
    isFavorite,
    findFavoritesByUserId,
    addFavorite,
    removeFavorite
}

export default api;