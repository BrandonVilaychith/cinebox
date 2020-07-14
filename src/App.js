import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Sidenav from "./components/Navigation/Sidenav";
import Discover from "./components/Pages/Discover";

function App() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <Sidenav />
        <Discover />
      </div>
    </div>
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
