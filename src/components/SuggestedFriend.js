import React from "react";
import PropTypes from "prop-types";

function SuggestedFriend(props){
  return (
    <React.Fragment>
    <img src={props.friendImage} />
      <p>{props.firstName} {props.lastName}</p>
      <button>Button</button>
    </React.Fragment>
  );
}

SuggestedFriend.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default SuggestedFriend;