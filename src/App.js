import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Sidenav from "./components/Navigation/Sidenav";
import Discover from "./components/Pages/Discover";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <Fragment>
      <Navbar />
      <Wrapper>
        <Sidenav />
        <Discover />
      </Wrapper>
    </Fragment>
  );
}

// <div className="body-container">
// <div className="nav-box">
//   <Sidenav />
// </div>
// <div className="body-box">
//   <Switch>{/* <Route exact path="/" component={Discover} /> */}</Switch>
// </div>
// </div>

export default App;
