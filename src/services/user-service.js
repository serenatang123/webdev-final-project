const REGISTER_URL = "http://localhost:3000/api";

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

const login = (credentials) => {
    return fetch(`${REGISTER_URL}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const profile = () => {
    return fetch(`${REGISTER_URL}/profile`, {
        credentials: 'include'
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            return undefined;
        }
    });
}

export const updateUser = (body) => {
    return fetch(`${REGISTER_URL}/profile/update`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json',
        },
    }).then(response => response.json());
}

export const logout = () => {
    return fetch(`${REGISTER_URL}/logout`, {
        method: 'POST',
        credentials: 'include'
    });
}

export default {
    register, login, profile, updateUser, logout
}