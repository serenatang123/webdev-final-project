// const REGISTER_URL = "http://localhost:3000/api";
const REGISTER_URL = "https://smart-kitchen-node-server.herokuapp.com/api";

export const register = (credentials) => {
    return fetch(`${REGISTER_URL}/register`, {
        method: 'POST',
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const login = (username, password) => {
    return fetch(`${REGISTER_URL}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({username, password}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const logout = () => {
    return fetch(`${REGISTER_URL}/logout`, {
        method: 'POST',
        credentials: 'include'
    });
}

export default {
    register, login, logout

}