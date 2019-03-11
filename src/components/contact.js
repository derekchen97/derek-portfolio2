import React, { Component } from "react";

import {
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent,
  Spinner
} from "react-mdl";

import { Table } from "react-bootstrap";

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
      fontSize: "25px",
      margin: "auto",
      paddingRight: "10px"
    };
  }

  render() {
    return (
      <div className="contact-body gradient-bg">
        <Grid className="contact-grid">
          <Cell col={12}>
            {/* on PC */}
            <h3 className="contact-type">
              >> SELECT * FROM contact WHERE name like "Derek%";
            </h3>
            {/* On Mobile */}
            <h3 className="contact-type2">Contact</h3>
          </Cell>

          <Cell col={12}>
            {/* on PC */}

            <Table striped bordered hover className="contact-table">
              <thead>
                <tr>
                  <th>#id</th>
                  <th>Name</th>
                  <th>MobileNumberNz</th>
                  <th>MobileNumberAu</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Derek Chen</td>
                  <td>(+64) 210 873 6701</td>
                  <td>(+61) 466 333 670</td>
                  <th>chen.derek97@gmail.com</th>
                </tr>
              </tbody>
            </Table>
            {/* on mobile: */}
            <div className="contact-type2">
              <ul class="list-group">
                <li class="list-group-item list-group-item-dark">
                  <i
                    className="fa fa-phone-square"
                    style={this.contactIcons}
                    aria-hidden="true"
                  />
                  Nz: (+64) 210 873 6701
                </li>
                <li class="list-group-item list-group-item-dark">
                  <i
                    className="fa fa-phone-square"
                    style={this.contactIcons}
                    aria-hidden="true"
                  />
                  Au: (+61) 466 333 670
                </li>
                <li class="list-group-item list-group-item-dark">
                  <i
                    className="fa fa-envelope"
                    style={this.contactIcons}
                    aria-hidden="true"
                  />
                  chen.derek97@gmail.com
                </li>
                {/* <li class="list-group-item list-group-item-dark">
                  <i
                    className="fa fa-skype"
                    style={this.contactIcons}
                    aria-hidden="true"
                  />
                  dezzyone
                </li> */}
              </ul>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
