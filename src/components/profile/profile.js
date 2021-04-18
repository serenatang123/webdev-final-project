import React, {useState, useEffect} from 'react';
import ProfileBio from "./profile-bio";
import ProfileAbout from "./profile-about";
import ProfileFavorite from "./profile-favorite";
import ProfileReview from "./profile-review";
import profileService from "../../services/profile-service";
import {useParams, Link} from "react-router-dom";


const Profile = ({user, setUser}) => {

    const {uid} = useParams();
    const [editing, setEditing] = useState(false);
    const [profileType, setProfileType] = useState();
    const [profile, setProfile] = useState();

    useEffect(() => {
        profileService.findProfileForUser(uid)
            .then(profile =>
                setProfile(profile))
    }, [uid])

    const saveProfile = (profile) => {
        // const newProfile = {
        //     ...profile,
        //     firstName: profile.firstName,
        //     lastName: profile.lastName,
        //     phone: profile.phone
        // }
        updateProfile(profile)
        setEditing(false)
    }

    const updateProfile = (profile) => {
        profileService.updateProfileForUser(profile._id, profile)
            .then((profile) => {
                setProfile((profile))
            })
    }

    return (
        <>
            <h1>Profile</h1>
            {JSON.stringify(profile)}
            {JSON.stringify(uid)}
            {!user &&
            <>
                <div className='alert alert-warning'>
                    Not logged in
                </div>
                <Link className='btn btn-outline-primary' to='/login'>Back to login page</Link>
            </>
            }
            {
                user && profile &&
                    <>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <ProfileBio profile={profile} setProfile={setProfile} editing={editing} setEditing={setEditing} saveProfile={saveProfile}/>
                                    {
                                        user.role === "ADMIN" && <Link to="/profile">Admin Panel to manage users!</Link>
                                    }
                                    <div className="list-group col-md-10">
                                        <button type="button"
                                                className="list-group-item"
                                                name="bio"
                                                onClick={(e) => setProfileType("About")}>
                                            About
                                        </button>
                                        <button type="button"
                                                className="list-group-item"
                                                name="bio"
                                                onClick={(e) => setProfileType("Review")}>
                                            Review
                                        </button>
                                        <button type="button"
                                                className="list-group-item"
                                                name="bio"
                                                onClick={(e) => setProfileType("Posted")}>
                                            Posted
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <h2>{profile.firstName} {profile.lastName}'s Profile</h2>
                                    <div className="row">
                                        <div className="col-md-8">
                                            {
                                                profileType === "About" &&
                                                <ProfileAbout profile={profile} setProfile={setProfile} editing={editing} setEditing={setEditing} saveProfile={saveProfile}/>
                                            }
                                            {
                                                profileType === "Review" &&
                                                <ProfileReview/>
                                            }
                                        </div>
                                        <div className="col-md-4">
                                            <ProfileFavorite/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
            }

        </>
    )
}

export default Profile

