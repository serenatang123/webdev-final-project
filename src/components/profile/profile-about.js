import React from 'react'

const ProfileAbout = ({profile, setProfile, editing, setEditing, saveProfile}) => {
    return (
        <>
            {
                editing &&
                <div className="about-block">
                    <i onClick={() => saveProfile(profile)} className="fa fa-check" style={{color:"green"}}></i>
                    <textarea rows={10} defaultValue={profile.about} onChange={(e) => setProfile(profile =>
                        ({...profile, about : e.target.value}))} className="form-control"/>
                </div>
            }
            {
                !editing &&
                <>
                    <div className="about-block">
                        <i onClick={() => setEditing(true)} className="fa fa-edit" style={{color:"blue"}}></i>
                        <p className="text-justify">{profile.about}</p>
                    </div>
                </>
            }
        </>
    )
}

export default ProfileAbout;