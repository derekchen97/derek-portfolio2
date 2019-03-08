import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Badge
} from "react-bootstrap/dist/react-bootstrap";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        {" "}
        <Button variant="primary">
          Profile <Badge variant="light">9</Badge>
          <span className="sr-only">unread messages</span>
        </Button>
      </div>

      //   <div style={{ width: "100%", margin: "auto" }}>
      //     <Grid className="landing-grid">
      //       <Cell col={12}>
      //         <img
      //           src={require("../profilepic.jpg")}
      //           alt="avatar"
      //           className="avatar-img"
      //         />

      //         <div className="banner-text">
      //           <h1>Derek's Portfolio</h1>
      //           <hr />

      //           <div className="inline-block-div">
      //             <p>
      //               <code>
      //                 <b>1 | Scripting:</b> Java | C | python | C#
      //               </code>
      //               <br />
      //               <code>
      //                 <b>2 | Database:</b> SQL | firebase
      //               </code>{" "}
      //               <br />
      //               <code>
      //                 <b>3 | Web Dev:</b> HTML | CSS | JavaScript (nodejs,
      //                 reactjs)
      //               </code>
      //             </p>
      //           </div>

      //           <br />

      //           <div className="social-links">
      //             {/* linkedin */}
      //             <a
      //               href="https://www.linkedin.com/in/derek-chen-521b16146/"
      //               rel="noopener noreferrer"
      //               target="_blank"
      //             >
      //               <i className="fa fa-linkedin-square" aria-hidden="true" />
      //             </a>
      //             {/* Github */}
      //             <a
      //               href="https://github.com/dezzy001"
      //               rel="noopener noreferrer"
      //               target="_blank"
      //             >
      //               <i className="fa fa-github-square" aria-hidden="true" />
      //             </a>
      //           </div>
      //         </div>
      //       </Cell>
      //     </Grid>
      //   </div>
    );
  }
}

export default LandingPage;
