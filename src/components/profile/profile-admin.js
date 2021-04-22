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
            <h3>Admin can see all the profiles:</h3>
            {/*{JSON.stringify(profiles)}*/}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">User First Name</th>
                        <th scope="col">User Last Name</th>
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
                            <td>{_profile.firstName}</td>
                            <td>{_profile.lastName}</td>
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