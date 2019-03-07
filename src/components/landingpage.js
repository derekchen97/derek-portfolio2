import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require("../profilepic.jpg")}
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Derek's Portfolio</h1>
              <hr />

              <div className="inline-block-div">
                <p>
                  <b>Scripting:</b> Java | C | python | C#
                  <br />
                  <b>Database:</b> SQL | firebase <br />
                  <b>Web Dev:</b> HTML | CSS | JavaScript (nodejs, reactjs)
                </p>
              </div>

              <br />

              <div className="social-links">
                {/* linkedin */}
                <a
                  href="https://www.linkedin.com/in/derek-chen-521b16146/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/dezzy001"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
