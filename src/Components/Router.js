import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "../Routes/Home";
import Blank from "../Routes/Blank";
import About from "../Routes/About";
import College from "../Routes/College";
import CollegeDetail from "../Routes/CollegeDetail";

export default () => (
  <Router>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/college" exact component={College} />
      <Route path="/college/:id" component={CollegeDetail} />
      <Route path="/university" component={College} />
      <Route path="/master" component={College} />
      <Route path="/immigration" component={Blank} />
      <Route path="/review" component={Blank} />
      <Route path="/contact" component={Blank} />
      <Redirect from="*" to="/" />
    </Switch>
    <Footer />
  </Router>
);
