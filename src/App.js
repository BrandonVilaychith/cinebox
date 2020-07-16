import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Sidenav from "./components/Navigation/Sidenav";
import Discover from "./components/Pages/Discover";
import Popular from "./components/Pages/Popular";
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
        <Switch>
          <Route exact path="/" component={Discover} />
          <Route path="/popular" component={Popular} />
        </Switch>
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
