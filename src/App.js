// App.js is where the website components are pieced together

import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link, NavLink } from "react-router-dom";

import "./App.css";
import Main from "./components/main";

class App extends Component {
  render() {
    //variables
    let title = "Derek's Portfolio";

    //react-styles
    let blackText = {
      // just need the color for nav link (if done in css file with important, it will overwrite the active text color also)
      color: "black"
    };

    let activeText = {
      //for nav links
      color: "white",
      fontFamily: "monospace",
      textDecoration: "none"
    };

    let activeDrawerText = {
      backgroundColor: "rgba(100,100,100,0.3)"
    };

    //return virtual dom
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            to="./landingpage"
            className="header-color"
            title={title}
            scroll
          >
            <Navigation>
              {/* <Link style={blackText} to="/resume">
                <a className="nav-links">Resume</a>
              </Link> */}
              <NavLink
                exact
                to="/"
                className="nav-links"
                style={blackText}
                activeStyle={activeText}
              >
                About
              </NavLink>
              <NavLink
                exact
                to="/project"
                className="nav-links"
                style={blackText}
                activeStyle={activeText}
              >
                Projects
              </NavLink>
              <NavLink
                exact
                to="/contact"
                className="nav-links"
                style={blackText}
                activeStyle={activeText}
              >
                Contact
              </NavLink>
            </Navigation>
          </Header>
          <Drawer title={title}>
            <Navigation>
              {/* <Link to="/resume">Resume</Link> */}
              <NavLink activeStyle={activeDrawerText} exact to="/">
                About
              </NavLink>
              <NavLink activeStyle={activeDrawerText} exact to="/project">
                Projects
              </NavLink>
              <NavLink activeStyle={activeDrawerText} exact to="/contact">
                Contact
              </NavLink>
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
