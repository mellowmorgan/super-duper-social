import React from "react";
import Nav from "./Nav";
import Profile from "./Profile";
import About from "./About";
import NewsFeed from "./NewsFeed";
import SuggestedFriendsList from "./SuggestedFriendsList";

function App() {
  return (
    <React.Fragment>
      <Nav /> 
      <div class="container-fluid">
        <div class="row">
          <div class="column col-3">
            <Profile />
            <About />
          </div>
          <div class="column col-6">
            <div className="news-feed"><NewsFeed /></div>
          </div>
          <div class="column col-3" id="suggested-friends">
            <SuggestedFriendsList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;