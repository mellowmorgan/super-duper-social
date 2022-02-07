import React from "react";
import profileImage from "./../img/prof.jpeg";


function Profile(){
  return (
    <React.Fragment>
      <div id="profile">
        <img src={profileImage} alt="The best profile picture" />
        <h3 id="profile-name">Kellie A. Corrigan</h3>
        <ul id="profile-links">
          <li><h6 id="profile-links">Tweets</h6></li>
          <li><h6 id="profile-links">Following</h6></li>
          <li><h6 id="profile-links">Fololowers</h6></li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Profile;