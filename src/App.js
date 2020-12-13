import './App.css';
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import "cirrus-ui";
import Home from "./components/home";
import ContactMe from "./components/contactMe";
import Work from "./components/projects";
import Header from "./components/header";
import About from "./components/about";


function App() {
  return (
    <Router basename="/">
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path = "/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contactme">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
