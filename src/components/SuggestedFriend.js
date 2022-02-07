import React from "react";
import PropTypes from "prop-types";

function SuggestedFriend(props){
  return (
    <React.Fragment>

    <div className="flex-container">
      <img src={props.friendImage} alt="The best profile picture" className="suggested-image flex-item"/>
      <div className="flex-item">
        <p>{props.firstName} {props.lastName}</p>
        <button>Button</button>
      </div>
    </div>

    </React.Fragment>
  );
}

SuggestedFriend.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default SuggestedFriend;