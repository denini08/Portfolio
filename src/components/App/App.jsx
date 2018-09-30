import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "../Home/Home";

import Contact from "../Contact/Contact";

import Blog from "../Blog/Blog";

import Match from "../Match/Match";

import Navigation from "../Navigation/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />

          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/home" exact component={Home} />

            <Route path="/contact" component={Contact} />

            <Route path="/blog" component={Blog} />

            <Route component={Match} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
