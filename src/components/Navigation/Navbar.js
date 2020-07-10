import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <h1 className="logo">Cinebox</h1>
      </div>
      <input
        className="search-box fas"
        placeholder="&#xf002;  Search..."
        type="text"
      />
    </div>
  );
};

export default Navbar;
