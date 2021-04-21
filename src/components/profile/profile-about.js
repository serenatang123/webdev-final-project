import React, {useState} from 'react'

const ProfileAbout = ({user, setUser, saveProfile}) => {

    const [editing, setEditing] = useState(false);

    return (
        <>
            {
                editing &&
                <div className="about-block">
                    <i onClick={() => {saveProfile(user); setEditing(false)}} className="fa fa-check" style={{color:"green"}}></i>
                    <textarea rows={10} defaultValue={user.about} onChange={(e) => setUser(user =>
                        ({...user, about: e.target.value}))} className="form-control"/>
                </div>
            }
            {
                !editing &&
                <>
                    <div className="about-block">
                        <i onClick={() => setEditing(true)} className="fa fa-edit" style={{color:"blue"}}></i>
                        <p className="text-justify">{user.about}</p>
                    </div>
                </>
            }
        </>
    )
}

export default ProfileAbout;