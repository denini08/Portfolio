import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { config } from 'dotenv';

import './app.css';

import Home from './containers/home/home';

import Contact from './containers/contact/contact';

import Blog from './containers/blog/blog';

import Match from './containers/match/match';

import Navigation from './containers/navigation/navigation';

config()

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />

          <Switch>
            <Route path='/' exact component={Home} />

            <Route path='/home' component={Home} />

            <Route path='/contact' component={Contact} />

            <Route path='/blog' component={Blog} />

            <Route component={Match} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
