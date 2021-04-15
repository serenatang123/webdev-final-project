const REGISTER_URL = "http://localhost:3000/api/register";

export const createUser = (user) => {
    fetch(REGISTER_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const api = {
    createUser,
}

export default api;