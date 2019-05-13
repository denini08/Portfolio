import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import "./app.css";

import Home from "./components/home/home";

import Contact from "./components/contact/contact";

import Match from "./components/match/match";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />

	<Route path="/home" exact component={Home} />

        <Route path="/contact" exact component={Contact} />

        <Route component={Match} />
      </Switch>
    );
  }
}
