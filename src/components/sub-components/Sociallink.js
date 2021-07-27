import React, { Component } from "react";

class Sociallink extends Component {
  render() {
    return (
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
          href="https://github.com/derekchen97"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>
      </div>
    );
  }
}

export default Sociallink;
