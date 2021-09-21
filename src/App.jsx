import React from "react";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

export default function App() {
  const objstyle = {
    color: "#61f3e0",
  };

  return (
    <>
      <BrowserRouter>
        <div id="navmain">
          <div id="logo">WebDemmo</div>
          <div className="navid">
            <NavLink activeStyle={objstyle} className="navlinks" to="/About">
              About
            </NavLink>
            <NavLink exact activeStyle={objstyle} className="navlinks" to="/">
              Home
            </NavLink>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />

        <Footer />
      </BrowserRouter>
    </>
  );
}
