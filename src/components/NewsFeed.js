import React from "react";
import NewsFeedPost from "./NewsFeedPost";
import NewsFeedSubmitPost from "./NewsFeedSubmitPost";

function NewsFeed(){
  return (
    <React.Fragment>
      <NewsFeedSubmitPost />
      <NewsFeedPost />      
    </React.Fragment >      
  )
}

export default NewsFeed;