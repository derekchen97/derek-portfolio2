import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Sociallink from "./sub-components/Sociallink";

class LandingPage extends Component {
  state = {};
  render() {
    
    const experienceStyle = {
      fontSize: "1.2em",
      color: "white",
      fontFamily: "monospace"
    }
    
    return (
      <div className="landing-container gradient-bg">
        <Grid className="landing-grid gradient-bg">
          <Cell col={12}>
            <img
              src={require("../assets/profilepic.jpg")}
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Derek's Portfolio</h1>
              <h2
                style={experienceStyle}
              >
                Junior Software Developer - Expedient Software | A BluJay Solutions Company
              </h2>
              <h2
                style={experienceStyle}
              >
                University of Melbourne Graduate - Bachelor of Science Majoring
                in Computing and Software systems
              </h2>
              <hr />

              <div className="inline-block-div">
                <p>
                  <code id="fade-in-animation-0-delay">
                    <b>1 | Scripting:</b> Genero FourJS | Java | C | python | C#
                  </code>
                  <br />
                  <code id="fade-in-animation-1-delay">
                    <b>2 | Database:</b> Informix DBMS | MySQL | firebase
                  </code>{" "}
                  <br />
                  <code id="fade-in-animation-2-delay">
                    <b>3 | Web Dev:</b> HTML | CSS | JavaScript (nodejs,
                    reactjs)
                  </code>
                </p>
              </div>

              <br />

              <Sociallink />
            </div>
          </Cell>
        </Grid>
        <br />
      </div>
    );
  }
}

export default LandingPage;
