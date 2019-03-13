// we will route all the components in main.js
import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import About from "./about";
import Project from "./project";
import Resume from "./resume";
import Contact from "./contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/resume" component={Resume} />
  </Switch>
);

export default Main;
