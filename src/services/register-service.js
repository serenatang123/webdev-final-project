const REGISTER_URL = "http://localhost:3000/api/register";

export const createUser = (user) => {
    fetch(REGISTER_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include'
    })
        .then(response => {
            console.log(response)
            return response.json()
        }).then()
}

const api = {
    createUser,
}

export default api;