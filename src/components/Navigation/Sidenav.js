import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Sidebar = styled.div`
  padding-top: 10em;
  min-width: 300px;
  background-color: #1a1e23;
  height: 100vh;
  position: fixed;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(NavLink)`
  font-size: 1.4em;
  list-style-type: none;
  text-align: center;
  padding: 15px 0;
  text-decoration: none;
  color: #ffffff;
  transition: 0.3s;
  &:hover {
    background-color: #0c0c0c;
    color: #143598;
  }
`;

const Sidenav = () => {
  return (
    <Sidebar>
      <Nav>
        <StyledLink exact to="/" id="item-1">
          {/* prettier-ignore */}
          <i className="fas fa-home" /> Discover
        </StyledLink>
        <StyledLink to="/popular" id="item-2">
          <i className="fas fa-fire-alt" /> Popular
        </StyledLink>
        <StyledLink to="/now_playing">
          <i className="fas fa-ticket-alt" /> Now Playing
        </StyledLink>
        <StyledLink to="/upcoming" id="item-4">
          <i className="fas fa-film" /> Upcoming
        </StyledLink>
      </Nav>
    </Sidebar>
  );
};

export default Sidenav;
