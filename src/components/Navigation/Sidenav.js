import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <nav>
        <Link to="/dates" className="side-nav-item item-1">
          {/* prettier-ignore */}
          <i className="fas fa-home"></i> Discover
        </Link>
        <Link className="side-nav-item item-2">
          <i className="fas fa-fire-alt"></i> Popular
        </Link>
        <Link className="side-nav-item">
          <i className="fas fa-ticket-alt"></i> Now Playing
        </Link>
        <Link className="side-nav-item item-4">
          <i className="fas fa-film"></i> Upcoming
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
