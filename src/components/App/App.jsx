import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "../Home/Home";

import Contact from "../Contact/Contact";

import Blog from "../Blog/Blog";

import Match from "../Match/Match";

import Navigation from "../Navigation/Navigation";

import {config} from "dotenv";

config()

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      social: [
        {title: 'linkedin', url: '', key: 1},
        {title: 'github', url: '', key: 2},
        {title: 'medium', url: '', key: 3}
      ]
    }
  }

  render() {
    console.log(process.env)

    return (
        <BrowserRouter>
          <div>
            <Navigation social={this.state.social}/>

            <Switch>
              <Route path="/" exact component={Home} />

              <Route path="/home" component={Home} />

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
