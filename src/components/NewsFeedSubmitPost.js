import React from "react";

function NewsFeedSubmitPost(){
  return (
    <React.Fragment>
      <div className="flex-container submit">
      <button type="submit">post!</button>
      <input type="text" value="comment"></input>
      </div>
    </React.Fragment>
  );
}

export default NewsFeedSubmitPost;