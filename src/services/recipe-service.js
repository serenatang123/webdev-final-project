const findRecipeByName = (recipeName) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
        .then(response => response.json())
}

const findRecipeByRecipeID = (recipeId) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then(response => response.json())
}

export default {
    findRecipeByName,
    findRecipeByRecipeID
}
