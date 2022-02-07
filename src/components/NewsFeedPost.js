import React from "react";
import profileImage from "./../img/prof.jpeg";

function NewsFeedPost(){
  return (
    <React.Fragment>
      <div className="flex-container">
        <img src={profileImage} alt="The best profile picture" className="post-image"/>
        <div className="post">
          <h3  id="news-feed-name">This posts name</h3>
          <p   id="news-feed-post-text">Lots of text about this post and stuff</p>
        </div>
      </div>
      <div className="flex-container">
        <img src={profileImage} alt="The best profile picture" className="post-image"/>
        <div className="post">
          <h3  id="news-feed-name">This posts name</h3>
          <p   id="news-feed-post-text">Lots of text about this post and stuff</p>
        </div>
      </div>
      <div className="flex-container">
        <img src={profileImage} alt="The best profile picture" className="post-image"/>
        <div className="post">
          <h3  id="news-feed-name">This posts name</h3>
          <p   id="news-feed-post-text">Lots of text about this post and stuff</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NewsFeedPost;