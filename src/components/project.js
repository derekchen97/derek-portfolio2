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
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "react-mdl";
import buttonData from "./dataStructures/buttonData";

class Project extends Component {
  /*the project page will contain tabs to different projects */
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      openDialog: false,
      videoUrl: ""
    };

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);

    //react styles:
    this.cardStyle = {
      minWidth: "450",
      margin: "auto"
    };

    this.projectText = {
      height: "100px"
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
            [
              new buttonData(
                "GitHub",
                "https://github.com/dezzy001/SWEN20003-project2",
                "link"
              ),
              new buttonData(
                "DEMO",
                "https://drive.google.com/open?id=1DmXzvD_zh6a848UjnVkovNSvd_-K62Rl",
                "link"
              ),
              new buttonData(
                "Video",
                "https://www.youtube.com/embed/LBp_ZgntJ2A?rel=0&showinfo=0&disablekb=1&modestbranding=1",
                "video"
              )
            ]
          )}

          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qOXkXWtiA4wrel=0&showinfo=0&disablekb=1&modestbranding=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          /> */}
          {/* project 2 - Unity 3d game in c# */}
          {this.createProject(
            require("../assets/retromata-image.png"),
            "Unity 3D Game in C#",
            "Using Unity 3D to create a 3D game featuring custom shaders, game persistance (save files) and 3D modelling software (Fusion 360). Implemented fundamental of Object Oriented programming principles and software patterns",
            [
              new buttonData(
                "GitHub",
                "https://github.com/dezzy001/COMP30019-project2",
                "link"
              ),
              new buttonData(
                "DEMO",
                "https://drive.google.com/open?id=11gGc9HO8hFKS-yYFypohYqm1Y82m6hQJ",
                "link"
              ),
              new buttonData(
                "Video",
                "https://www.youtube.com/embed/LBp_ZgntJ2A?rel=0&showinfo=0&disablekb=1&modestbranding=1",
                "video"
              )
            ]
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

        {/* Popup dialog/ modal box for show case videos or about me section */}
        <Dialog open={this.state.openDialog}>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.insertProjects()} </div>
            </Cell>
          </Grid>
          <DialogTitle>Video</DialogTitle>
          {/* <div className="video-container"> */}
          <DialogContent>
            <iframe
              width="560"
              height="315"
              src={this.state.videoUrl}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </DialogContent>
          {/* </div> */}

          <DialogActions>
            {/* <Button type="button">Agree</Button> */}
            <Button type="button" onClick={this.handleCloseDialog}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  // handle modal(dialog box) here for videos/about project
  handleOpenDialog(url) {
    // this.videoUrl = url;
    this.setState({
      openDialog: true,
      videoUrl: url
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
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
      <div id="fadein-2s">
        <Card className="project" shadow={5} style={this.cardStyle}>
          <CardTitle
            style={{
              color: "#fff",
              height: "220px",
              background: `url(${imageImport})` + "center / cover"

              // backgroundSize: "cover"
            }}
          />
          <code>{title}</code>
          <CardText style={this.projectText}>{text}</CardText>
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
      if (button.type == "video") {
        //create a modal/dialog popup for the video
        items.push(
          <Button
            colored
            onClick={() => this.handleOpenDialog(button.url)}
            raised
            ripple
            target="_blank"
          >
            {button.name}
          </Button>
        );
      } else if (button.type == "link") {
        //link to a new tab (new tab use target="_blank")
        items.push(
          <Button colored href={button.url} target="_blank">
            {button.name}
          </Button>
        );
      }
    });

    return items;
  }
}

export default Project;
