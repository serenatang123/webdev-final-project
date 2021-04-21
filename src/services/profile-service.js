const USER_URL = "http://localhost:3000/api";

export const findAllProfiles = () =>
    fetch(`${USER_URL}/profiles`, {
        credentials: 'include',
    })
        .then(response => response.json())

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
        })

export const deleteProfile = () =>
    fetch(`${USER_URL}/profile`, {
        method: "DELETE",
        credentials: 'include',
    })
        .then(response => response.json())

export const updateProfile = (profile) =>
    fetch(`${USER_URL}/profile`, {
        method: "PUT",
        credentials: 'include',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const api = {
    findAllProfiles, findProfile, deleteProfile, updateProfile
}

export default api;