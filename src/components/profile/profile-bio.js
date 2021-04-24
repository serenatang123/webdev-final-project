import React, {useState} from 'react'

const ProfileBio = ({user, setUser, saveProfile, editable, currentProfile}) => {

    const [editing, setEditing] = useState(false);

    return (
        <>
            {/*<h3>Bio</h3>*/}
            {
                editable &&
                    <>
                        <img className="avatar" src={user.avatar} width="300"/>
                        <p className="bio-name" >{user.firstName} {user.lastName}</p>
                        {
                            editing &&
                            <div className="bio-block">
                                <i onClick={() => {saveProfile(user); setEditing(false)}} className="fa fa-check" style={{color:"green"}}></i>
                                <input defaultValue={user.phone} onChange={(e) => setUser(user =>
                                    ({...user, phone : e.target.value}))} className="form-control"/>
                                <input defaultValue={user.email} onChange = {(e) => setUser(user =>
                                    ({...user, email : e.target.value}))} className="form-control"/>
                                <input defaultValue={user.address} onChange = {(e) => setUser(user =>
                                    ({...user, address : e.target.value}))} className="form-control"/>
                            </div>
                        }
                        {
                            !editing &&
                            <>
                                <div className="bio-block">
                                    <i onClick={() => setEditing(true)} className="fa fa-edit" style={{color:"blue"}}></i>
                                    <ul className="list-group">
                                        <li className="list-group-item">{user.phone}</li>
                                        <li className="list-group-item">{user.email}</li>
                                        <li className="list-group-item">{user.address}</li>
                                    </ul>
                                </div>
                            </>
                        }
                    </>
            }
            {
                !editable &&
                <>
                    <img src={currentProfile.avatar} width="200"/>
                    <p>{currentProfile.firstName} {currentProfile.lastName}</p>
                    <div className="bio-block">
                        <ul className="list-group">
                            <li className="list-group-item">{currentProfile.phone}</li>
                            <li className="list-group-item">{currentProfile.email}</li>
                            <li className="list-group-item">{currentProfile.address}</li>
                        </ul>
                    </div>
                </>
            }



        </>
    )
}



export default ProfileBio;