import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import ProfileBio from "./profile-bio";
import ProfileAbout from "./profile-about";
import ProfileFavorite from "./profile-favorite";
import ProfileReview from "./profile-review";
import ProfilePosted from "./profile-posted";
import profileService from "../../services/profile-service";
import {useParams} from "react-router-dom";


const Profile = () => {

    const {uid} = useParams();
    const [editing, setEditing] = useState(false);
    const [profileType, setProfileType] = useState();
    const [profile, setProfile] = useState();

    useEffect(() => {
        if(uid !== "undefined" && typeof uid !== "undefined") {
            profileService.findProfileForUser(uid)
                .then((profile) => {
                    setProfile(profile)
                });
        }
    }, [uid])

    const saveProfile = (profile) => {
        setEditing(false)
        const newProfile = {
            ...profile,
            firstName: profile.firstName,
            lastName: profile.lastName,
            phone: profile.phone
        }
        updateProfile(newProfile)
    }

    const updateProfile = (profile) => {
        profileService.updateProfileForUser(profile._id, profile)
            .then((profile) => {
                setProfile((profile))
            })
    }

    return (
        <>
            {JSON.stringify(profile)}
            {JSON.stringify(uid)}
            {
                profile &&
                    <>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <ProfileBio profile={profile} setProfile={setProfile} editing={editing} setEditing={setEditing} saveProfile={saveProfile}/>
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

export default Profile

