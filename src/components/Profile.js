import React from "react";
import profileImage from "./../img/prof.jpeg";


function Profile(){
  return (
    <React.Fragment>
      <img src={profileImage} alt="The best profile picture" />
      <h3 id="profile-name">Kellie A. Corrigan</h3>
      <h4 id="profile-links">Tweets</h4>
      <h4 id="profile-links">Following</h4>
      <h4 id="profile-links">Fololowers</h4>
    </React.Fragment>
  );
}

export default Profile;