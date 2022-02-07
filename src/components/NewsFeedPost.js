import React from "react";
import profileImage from "./../img/prof.jpeg";

function NewsFeedPost(){
  return (
    <React.Fragment>
      <img src={profileImage} alt="The best profile picture" />
      <h3 id="news-feed-name">This posts name</h3>
      <p id="news-feed-post-text">Lots of text about this post and stuff</p>
      
      <img src={profileImage} alt="The best profile picture" />
      <h3 id="news-feed-name">This posts name</h3>
      <p id="news-feed-post-text">Lots of text about this post and stuff</p>

      <img src={profileImage} alt="The best profile picture" />
      <h3 id="news-feed-name">This posts name</h3>
      <p id="news-feed-post-text">Lots of text about this post and stuff</p>
    </React.Fragment>
  )
}

export default NewsFeedPost;