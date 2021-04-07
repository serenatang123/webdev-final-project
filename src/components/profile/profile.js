import React, {useState} from 'react'
import ProfileBio from "./profile-bio";
import ProfileAbout from "./profile-about";
import ProfileFavorite from "./profile-favorite";
import ProfileFollower from "./profile-follower";
import ProfileFollowing from "./profile-following";
import ProfileReview from "./profile-review";
import ProfilePosted from "./profile-posted";

const Profile = (
    user=[{"_id":"1"}]
) => {
    const [profileType, setProfileType] = useState();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <ProfileBio/>
                        <div className="list-group col-md-10">
                            <button type="button"
                                   className="list-group-item"
                                   name={user._id}
                                   onClick={(e) => setProfileType("About")}>
                                About
                            </button>
                            <button type="button"
                                   className="list-group-item"
                                   name={user._id}
                                   onClick={(e) => setProfileType("Following")}>
                                Following
                            </button>
                            <button type="button"
                                    className="list-group-item"
                                    name={user._id}
                                    onClick={(e) => setProfileType("Follower")}>
                                Follower
                            </button>
                            <button type="button"
                                    className="list-group-item"
                                    name={user._id}
                                    onClick={(e) => setProfileType("Review")}>
                                Review
                            </button>
                            <button type="button"
                                    className="list-group-item"
                                    name={user._id}
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
                                        <ProfileAbout/>
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
    )
}

export default Profile;