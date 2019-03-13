import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

import "./App.css";
import Main from "./components/main";

class App extends Component {
  render() {
    //variables
    let title = "Derek's Portfolio";

    //react-styles
    let blackText = {
      color: "rgba(0,0,0,0.9)",
      fontFamily: "monospace",
      textDecoration: "none",
      fontSize: "1.5em"
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
              <Link style={blackText} to="./">
                <a className="nav-links">About</a>
              </Link>
              <Link style={blackText} to="/project">
                <a className="nav-links">Projects</a>
              </Link>
              <Link style={blackText} to="/contact">
                <a className="nav-links">Contact</a>
              </Link>
            </Navigation>
          </Header>
          <Drawer title={title}>
            <Navigation>
              {/* <Link to="/resume">Resume</Link> */}
              <Link to="./">About</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact</Link>
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
