import React from "react";

function Search(){
  return (
    <React.Fragment>
      <input value="Search" class="shadow" id="search-input"></input>
      <button id="tweet-button" class="shadow">Tweet</button>
    </React.Fragment>
  );
}
 
export default Search;