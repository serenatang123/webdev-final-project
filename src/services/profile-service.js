const USER_URL = "http://localhost:3001/api";
// const USER_URL = "https://smart-kitchen-node-server.herokuapp.com/api";

// export const findAllProfiles = () =>
//     fetch(`${USER_URL}/profiles`, {
//         credentials: 'include'
//     })
//         .then(response => response.json());

export const findAllProfiles = () =>
    fetch(`${USER_URL}/profiles`)
        .then(res => res.json());

export const findProfile = () =>
    fetch(`${USER_URL}/profile`, {
        credentials: 'include'
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return undefined;
            }
        });

export const findProfileById = (userId) =>
    fetch(`${USER_URL}/profiles/${userId}`, {
        credentials: 'include',
    })
        .then(response => response.json());

export const findProfileByUsername = (username) =>
    fetch(`${USER_URL}/profiles/username/${username}`, {
        credentials: 'include',
    })
        .then(response => response.json());

export const deleteProfile = (userId) =>
    fetch(`${USER_URL}/profiles/${userId}`, {
        method: "DELETE",
        credentials: 'include',
    })
        .then(response => response.json());

export const updateProfile = (profile) =>
    fetch(`${USER_URL}/profile`, {
        method: "PUT",
        credentials: 'include',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

const api = {
    findAllProfiles, findProfile, findProfileById, findProfileByUsername, deleteProfile, updateProfile
}

export default api;