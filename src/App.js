import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Sidenav from "./components/Navigation/Sidenav";
import Discover from "./components/Pages/Discover";
import Popular from "./components/Pages/Popular";
import styled from "styled-components";
import Upcoming from "./components/Pages/Upcoming";
import Playing from "./components/Pages/Playing";

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
          <Route path="/now_playing" component={Playing} />
          <Route path="/upcoming" component={Upcoming} />
        </Switch>
      </Wrapper>
    </Fragment>
  );
}

export default App;
