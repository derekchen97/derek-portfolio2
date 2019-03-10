import React, { Component } from "react";

import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };

    //react styles:
    this.contactList = {
      fontSize: "30px",
      margin: "auto",
      fontFamily: "monospace"
    };

    this.contactIcons = {
      fontSize: "30px",
      margin: "auto"
    };
  }

  render() {
    return (
      <div className="contact-body gradient-bg">
        <Grid className="contact-grid" id="fadein-2s">
          {/* <Cell col={6}>
            <h2>Derek Chen</h2>
            <img
              src={require("../assets/profilepic.jpg")}
              alt="avatar"
              style={{ height: "250px", border: "6px solid grey" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              insert text here
            </p>
          </Cell> 
          */}
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List style={{ textAlign: "center" }}>
                <ListItem>
                  <ListItemContent style={this.contactList}>
                    <i
                      className="fa fa-phone-square"
                      style={this.contactIcons}
                      aria-hidden="true"
                    />
                    Au: (+61) 466 333 670
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={this.contactList}>
                    <i
                      className="fa fa-phone-square"
                      style={this.contactIcons}
                      aria-hidden="true"
                    />
                    Nz: (+64) 210 873 6701
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={this.contactList}>
                    <i
                      className="fa fa-envelope"
                      style={this.contactIcons}
                      aria-hidden="true"
                    />
                    chen.derek97@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={this.contactList}>
                    <i
                      className="fa fa-skype"
                      style={this.contactIcons}
                      aria-hidden="true"
                    />
                    dezzyone
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
