import React from 'react'
import avatar from '../../img/avatar.png';

const ProfileBio = () => {
    return (
        <>
            <h3>Bio</h3>
            <img src={avatar}/>
            <p>Jake Roche</p>
            <p>jakeroche2021@gmail.com</p>
            <p>San Jose, CA, United State</p>

        </>
    )
}

export default ProfileBio;