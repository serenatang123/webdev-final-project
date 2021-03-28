const findMusicsByArtistName = (artistName) => {
    return fetch(`https://itunes.apple.com/search?term=${artistName}`)
        .then(response => response.json())
}

const findMusicsByArtistID = (artistID) => {
    return fetch(`https://itunes.apple.com/lookup?id=${artistID}`)
        .then(response => response.json())
}

export default {
    findMusicsByArtistName,
    findMusicsByArtistID
}