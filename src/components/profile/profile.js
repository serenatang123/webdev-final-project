import React, {useState, useEffect} from 'react'
import ProfileBio from "./profile-bio";
import ProfileAbout from "./profile-about";
import ProfileFavorite from "./profile-favorite";
import ProfileFollower from "./profile-follower";
import ProfileFollowing from "./profile-following";
import ProfileReview from "./profile-review";
import ProfilePosted from "./profile-posted";
import profileService, {
    createProfileForUser, deleteProfileForUser,
    findAllProfiles,
    findProfileForUser, updateProfileForUser
} from "../../services/profile-service";
import {useParams} from "react-router-dom";

const Profile = (
    {

        createProfileForUser,
        findAllProfiles,
        findProfileForUser,
        deleteProfileForUser,
        updateProfileForUser
    }
) => {
    const {uid} = useParams();
    const [editing, setEditing] = useState(false);
    const [profileType, setProfileType] = useState();
    const [profile, setProfile] = useState();

    useEffect(() => {
        profileService.findProfileForUser("234")
            .then((profile) => {
                setProfile(profile)
            });
    }, [])

    return (
        <>
            {JSON.stringify(profile)}
            {
                profile &&
                    <>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <ProfileBio profile={profile} setProfile={setProfile} editing={editing} setEditing={setEditing}/>
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
                                                onClick={(e) => setProfileType("Following")}>
                                            Following
                                        </button>
                                        <button type="button"
                                                className="list-group-item"
                                                name="bio"
                                                onClick={(e) => setProfileType("Follower")}>
                                            Follower
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
                                    <h2>xxx's Profile</h2>
                                    <div className="row">
                                        <div className="col-md-8">
                                            {
                                                profileType === "About" &&
                                                <ProfileAbout profile={profile} setProfile={setProfile} editing={editing} setEditing={setEditing}/>
                                            }
                                            {
                                                profileType === "Following" &&
                                                <ProfileFollowing/>
                                            }
                                            {
                                                profileType === "Follower" &&
                                                <ProfileFollower/>
                                            }
                                            {
                                                profileType === "Review" &&
                                                <ProfileReview/>
                                            }
                                            {
                                                profileType === "Posted" &&
                                                <ProfilePosted/>
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

export default Profile;