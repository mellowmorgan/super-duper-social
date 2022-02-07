import React from "react";
import SuggestedFriend from "./SuggestedFriend";
import friendImage1 from "./../img/prof1.jpeg";
import friendImage2 from "./../img/prof2.png";
import friendImage3 from "./../img/prof3.jpeg";

const suggestedFriends = [
  {
    firstName: "Johnny",
    lastName: "Donald",
    friendImage: friendImage1
  },
  {
    firstName: "Susan",
    lastName: "Johnson",
    friendImage: friendImage2
  },
  {
    firstName: "Matt",
    lastName: "Corrigan",
    friendImage: friendImage3
  }
];

function SuggestedFriendsList(){
  return(
    <React.Fragment>
      <div id="suggested">
        <h4>Lorem Ipsum</h4>
        {suggestedFriends.map((suggestedFriend, index) =>
          <div id="suggested-friend">
          <SuggestedFriend firstName={suggestedFriend.firstName}
          lastName={suggestedFriend.lastName}
          friendImage={suggestedFriend.friendImage}
          key={index} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default SuggestedFriendsList;