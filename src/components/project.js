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
    this.cardTitleStyle = {
      color: "#000",
      height: "176px",
      background: `url(${require("../assets/Java Slick Game Image.png")})`
    };
  }

  //varialbes here

  /**
   * Checks the state of the tabs (if it has been switched)
   * If it has changed, show the appropriate content
   */
  toggleCategories() {
    if (this.state.activeTab === 0) {
      //University project (tabId = 0 is index of the first tab)
      return (
        <Card shadow={5} style={this.cardStyle}>
          <CardTitle style={this.cardTitleStyle}>Java Slick Game</CardTitle>
          <CardText>lorem test test</CardText>
          <CardActions>
            <Button colored>Github</Button>
            <Button colored>demo</Button>
            <Button colored>about</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
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
          <Tab>Personal Projects</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()} </div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Project;
