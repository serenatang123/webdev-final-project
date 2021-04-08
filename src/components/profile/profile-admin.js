import React, {useState, useEffect} from 'react'
import ProfileBio from "./profile-bio";
import ProfileAbout from "./profile-about";
import ProfileFavorite from "./profile-favorite";
import ProfileFollower from "./profile-follower";
import ProfileFollowing from "./profile-following";
import ProfileReview from "./profile-review";
import ProfilePosted from "./profile-posted";
import profileService, {updateProfileForUser} from "../../services/profile-service";
import {useParams} from "react-router-dom";

const ProfileAdmin = (
    {
        updateProfileForUser,
        deleteProfileForUser
    }
) => {
    const [editing, setEditing] = useState(false);
    const [profile, setProfile] = useState();
    const [profiles, setProfiles] = useState();

    useEffect(() => {
        profileService.findAllProfiles()
            .then((profiles) => {
                setProfiles(profiles)
            });
    }, [])

    return (
        <>
            <h3>Admin can see all the profiles:</h3>
            {JSON.stringify(profiles)}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">User Name</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                {
                    profiles && profiles.map(_profile =>
                        <tr>
                            <td>{_profile.id}</td>
                            <td>{_profile.name}</td>
                            <td>
                                <i className="fa fa-check float-right"/>
                                <i className="fa fa-trash float-right"/>
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