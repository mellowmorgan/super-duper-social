import React from "react";
import Search from "./Search";

function Nav(){
  return (
    <React.Fragment>
      <button>Home</button>
      <button>Notifications</button>
      <button>Messages</button>
      <Search />
    </React.Fragment>
  );
}

export default Nav;