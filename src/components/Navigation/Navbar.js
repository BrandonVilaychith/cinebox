import React from "react";
import styled from "styled-components";

const Navigation = styled.div`
  color: #ffffff;
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 1000;
`;

const SearchBar = styled.input`
  width: 100%;
  background-color: #3d5acd;
  border: 0;
  color: #ffffff;
  font-size: 2em;
  font-family: "Font Awesome 5 Free", Roboto, Arial, Helvetica, sans-serif;
  font-weight: 300;
  padding-left: 20px;
  &::placeholder {
    font-size: 0.8em;
    padding-bottom: 700px;
    padding: 0;
    color: #ffffff;
    opacity: 0.5;
    font-weight: 900;
  }
  &:focus {
    outline: none;
  }
`;

const LogoContainer = styled.div`
  background-color: #143598;
  min-width: 300px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  float: left;
`;

const Logo = styled.h1`
  cursor: pointer;
  font-size: 1em;
  text-align: center;
  border: 0.1em solid white;
  padding: 0.5em 0.7em;
  width: 100px;
`;

const Navbar = () => {
  return (
    <Navigation>
      <LogoContainer>
        <Logo>Cinebox</Logo>
      </LogoContainer>
      <SearchBar
        className="search-box fas"
        placeholder="&#xf002;  Search..."
        type="text"
      />
    </Navigation>
  );
};

export default Navbar;
