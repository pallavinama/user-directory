import React from "react";

const NavBar = () => {
  return (
    <nav className="nav">
      <a className="nav-link active" href="/">
        Employee Tracker
      </a>
      <a className="nav-link" href="/directory">
        Directory
      </a>
    </nav>
  );
};

export default NavBar;