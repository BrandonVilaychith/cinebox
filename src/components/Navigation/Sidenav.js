import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <nav>
        <Link to="/dates" className="side-nav-item item-1">
          {/* prettier-ignore */}
          <i class="fas fa-home"></i> Discover
        </Link>
        <Link className="side-nav-item item-2">
          <i class="fas fa-fire-alt"></i> Popular
        </Link>
        <Link className="side-nav-item">
          <i class="fas fa-ticket-alt"></i> Now Playing
        </Link>
        <Link className="side-nav-item item-4">
          <i class="fas fa-film"></i> Upcoming
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
