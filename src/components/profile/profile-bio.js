import React from 'react'

const ProfileBio = ({profile, setProfile, editing, setEditing}) => {

    return (
        <>
            <h3>Bio</h3>
            <img src={profile.avatar} width="200"/>
            <p>{profile.name}</p>
            {
                editing &&
                <div className="bio-block">
                    <i onClick={() => setProfile()} className="fa fa-check" style={{color:"green"}}></i>
                    <input defaultValue={profile.phone} onChange={(e) => setProfile(profile =>
                        ({...profile, src : e.target.value}))} className="form-control"/>
                    <input defaultValue={profile.email} onChange = {(e) => setProfile(profile =>
                        ({...profile, width : e.target.value}))} className="form-control"/>
                    <input defaultValue={profile.address} onChange = {(e) => setProfile(profile =>
                        ({...profile, height : e.target.value}))} className="form-control"/>
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