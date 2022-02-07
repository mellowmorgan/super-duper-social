import React from "react";
import Search from "./Search";

function Nav(){
  return (
    <React.Fragment>
      <nav className="pad-navbar navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button className="nav-item nav-link" >Home</button>
            <button className="nav-item nav-link">Notifications</button>
            <button className="nav-item nav-link">Messages</button>
            </div>
          <div className="navbar-nav ms-auto"><Search /></div>
        </div>
      </nav>
      <hr className="thick" />

      
    </React.Fragment>
  );
}

export default Nav;