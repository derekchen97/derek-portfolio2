import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  IconButton,
  Button
} from "react-mdl";

class Project extends Component {
  /*the project page will contain tabs to different projects */
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };

    //react styles:
    this.cardStyle = {
      minWidth: "450",
      margin: "auto"
    };
  }

  //varialbes here

  /**
   * Checks the state of the tabs (if it has been switched)
   * If it has changed, show the appropriate content
   *
   * Insert all the projects in toggle categories
   */
  insertProjects() {
    if (this.state.activeTab === 0) {
      //University project (tabId = 0 is index of the first tab)
      return (
        <div className="projects-grid">
          {/* project 1 - slick game in java */}
          {this.createProject(
            require("../assets/javaslickgame.png"),
            "Java Slick Game",
            "Using principles of Object Oriented programming and UML diagrams to create a 2d RPG game using the SLICK + LWJGL (graphic rendering) libraries",
            ["GitHub", "Video", "Demo"]
          )}
          {/* project 2 - Unity 3d game in c# */}
          {this.createProject(
            require("../assets/javaslickgame.png"),
            "Unity 3D Game in C#",
            "Using principles of Object Oriented programming in Unity 3D to create a 3D game with custom shaders, game persistance (save files) and 3D modelling software (Fusion 360) ",
            ["GitHub", "Video", "Demo"]
          )}
        </div>
      );
    } else if (this.state.activeTab === 1) {
      //University project (tabId = 0 is index of the first tab)
      return (
        <div>
          <h1>Personal Projects</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
        >
          <Tab>University Projects</Tab>
          {/* <Tab>Personal Projects</Tab> */}
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.insertProjects()} </div>
          </Cell>
        </Grid>
      </div>
    );
  }

  //project methods down here:
  /**
   * This method returns a project card with the following inputs
   * @param {*} imageImport - takes in the require/import of the image
   * @param {*} title
   * @param {*} text
   * @param {*} buttons - array of strings (try keep under 3 strings)
   */
  createProject(imageImport, title, text, buttons) {
    return (
      <div>
        <Card className="project" shadow={5} style={this.cardStyle}>
          <CardTitle
            style={{
              color: "#fff",
              height: "200px",
              background: `url(${imageImport})` + "center / cover"

              // backgroundSize: "cover"
            }}
          >
            {title}
          </CardTitle>
          <CardText>{text}</CardText>
          <CardActions>{this.createProjectButton(buttons)}</CardActions>
          <CardMenu style={{ color: "#fff" }}>
            {/* <IconButton name="share" /> */}
          </CardMenu>
        </Card>
      </div>
    );
  }

  /**
   * Returns an array of button react component from a loop of button string names
   * @param {*} buttons - a array of strings for the button name
   */
  createProjectButton(buttons) {
    let items = [];
    buttons.forEach(button => {
      items.push(<Button colored>{button}</Button>);
    });
    return items;
  }
}

export default Project;
