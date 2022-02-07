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
      <Profile />
      <About />
      <NewsFeed />
      <SuggestedFriendsList />
    </React.Fragment>
  );
}

export default App;