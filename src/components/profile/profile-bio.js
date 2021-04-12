import React from 'react'

const ProfileBio = ({profile, setProfile, editing, setEditing, saveProfile}) => {

    return (
        <>
            <h3>Bio</h3>
            <img src={profile.avatar} width="200"/>
            <p>{profile.firstName} {profile.lastName}</p>
            {
                editing &&
                <div className="bio-block">
                    <i onClick={() => saveProfile(profile)} className="fa fa-check" style={{color:"green"}}></i>
                    <input defaultValue={profile.phone} onChange={(e) => setProfile(profile =>
                        ({...profile, phone : e.target.value}))} className="form-control"/>
                    <input defaultValue={profile.email} onChange = {(e) => setProfile(profile =>
                        ({...profile, email : e.target.value}))} className="form-control"/>
                    <input defaultValue={profile.address} onChange = {(e) => setProfile(profile =>
                        ({...profile, address : e.target.value}))} className="form-control"/>
                </div>
            }
            {
                !editing &&
                <>
                    <div className="bio-block">
                        <i onClick={() => setEditing(true)} className="fa fa-edit" style={{color:"blue"}}></i>
                        <ul className="list-group">
                            <li className="list-group-item">{profile.phone}</li>
                            <li className="list-group-item">{profile.email}</li>
                            <li className="list-group-item">{profile.address}</li>
                        </ul>
                    </div>
                </>
            }


        </>
    )
}



export default ProfileBio;