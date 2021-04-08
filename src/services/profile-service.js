const PROFILE_URL = "http://localhost:8080/api/profile";

export const createProfileForUser = (id, profile) =>
    fetch(`${PROFILE_URL}/${id}`, {
        method: "POST",
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllProfiles = () =>
    fetch("http://localhost:8080/api/profiles")
        .then(response => response.json());

export const findProfileForUser = (id) =>
    fetch(`${PROFILE_URL}/${id}`)
        .then(response => response.json())

export const deleteProfileForUser = (id) =>
    fetch(`${PROFILE_URL}/${id}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateProfileForUser = (id, profile) =>
    fetch(`${PROFILE_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


const api = {
    createProfileForUser, findAllProfiles, findProfileForUser, deleteProfileForUser, updateProfileForUser
}

export default api;