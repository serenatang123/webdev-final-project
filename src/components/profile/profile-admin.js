import React, {useState, useEffect} from 'react'
import profileService from "../../services/profile-service";
import {Link} from "react-router-dom";

const ProfileAdmin = () => {
    const [profiles, setProfiles] = useState();

    useEffect(() => {
        profileService.findAllProfiles()
            .then((profiles) => {
                setProfiles(profiles)
            })
    }, [])


    const handleDelete = (e) => {
        console.log(e.target.id)
        profileService.deleteProfile(e.target.id)
            .then(res => console.log(res))
        setProfiles(profiles.filter(item => item._id !== e.target.id))
    }

    return (
        <>
            <h3>Admin Panel</h3>
            <Link className="btn btn-primary" to="/profile" style={{margin:"10px"}}>
                Back to my profile</Link>
            {/*{JSON.stringify(profiles)}*/}
            <table className="table admin-table">
                <thead>
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">Username</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">CreatedAt</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                {
                    profiles && profiles.map(_profile =>
                        <tr key={_profile._id}>
                            <td>
                                <Link to={`/profiles/${_profile._id}`}>
                                    {_profile._id}
                                </Link>
                            </td>
                            <td>{_profile.username}</td>
                            <td>{_profile.firstName}</td>
                            <td>{_profile.lastName}</td>
                            <td>{_profile.role}</td>
                            <td>{_profile.createdAt}</td>
                            <td>
                                <i id={_profile._id} className="fa fa-trash float-left" onClick={handleDelete}/>
                            </td>
                        </tr>
                    )
                }
                </tbody>

            </table>
        </>
    )
}

export default ProfileAdmin;