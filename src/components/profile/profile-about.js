import React from 'react'

const ProfileAbout = ({profile, setProfile, editing, setEditing}) => {
    return (
        <p className="text-justify">{profile.about}</p>
    )
}

export default ProfileAbout;