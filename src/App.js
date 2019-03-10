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
      color: "#000"
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
                Resume
              </Link> */}
              <Link style={blackText} to="./">
                About
              </Link>
              <Link style={blackText} to="/project">
                Projects
              </Link>
              <Link style={blackText} to="/contact">
                Contact
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
