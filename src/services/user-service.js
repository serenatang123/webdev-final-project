const USER_API = "http://localhost:3000/api";

const register = (credentials) => {
    return fetch(`${USER_API}/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

// fetch 里面的 credentials： http 交互需要指定的值
const login = (credentials) => {
    return fetch(`${USER_API}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

// const profile = () => {
//     return fetch(`${USER_API}/profile`, {
//         method: "POST",
//         credentials: "include"
//     }).then(response => response.json())
// }

export const profile = () => {
    return fetch(`${USER_API}/profile`, {
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
    return fetch(`${USER_API}/profile/update`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json',
        },
    }).then(response => response.json());
}

export const logout = () => {
    return fetch(`${USER_API}/logout`, {
        method: 'POST',
        credentials: 'include'
    });
}

export default {
    register, login, profile, updateUser, logout
}

// TODO: 前段增加访问 session 的逻辑，可能调个包