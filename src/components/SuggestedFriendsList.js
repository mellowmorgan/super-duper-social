import React from "react";
import SuggestedFriend from "./SuggestedFriend";
import friendImage1 from "./../img/prof1.jpeg"
import friendImage2 from "./../img/prof2.png"
import friendImage3 from "./../img/prof3.jpeg"

const suggestedFriends = [
  {
    firstName: "John",
    lastName: "Doe",
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
      <h4>Lorem Ipsum</h4>
      {suggestedFriends.map((suggestedFriend, index) =>
        <SuggestedFriend firstName={suggestedFriend.firstName}
        lastName={suggestedFriend.lastName}
        friendImage={suggestedFriend.friendImage}
        key={index} />
      )}
    </React.Fragment>
  );
}

export default SuggestedFriendsList;