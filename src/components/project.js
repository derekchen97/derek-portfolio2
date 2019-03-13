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
import { Modal } from "react-bootstrap";

class Project extends Component {
  /*the project page will contain tabs to different projects */
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      openDialog: false,
      videoUrl: "",
      show: false
    };

    // test
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    //react styles:
    this.cardStyle = {
      minWidth: "450",
      margin: "auto"
    };

    this.projectText = {
      height: "150px"
    };
  }

  //varialbes here
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

        <Modal
          size="lg"
          animation
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>{}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={this.state.videoUrl}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  //functions down here ===============================================================================

  // handle modal(dialog box) here for videos/about project
  handleClose() {
    //closes the modal
    this.setState({ show: false });
  }

  handleShow(url) {
    // turns on the model with the selected video
    this.setState({ show: true, videoUrl: url });
  }

  //project methods down here #################################
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
                "https://www.youtube.com/embed/IsEQJNNJtqM?rel=0&showinfo=0&disablekb=1&modestbranding=1",
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
          <h4>{title}</h4>
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
            onClick={() => this.handleShow(button.url)}
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
