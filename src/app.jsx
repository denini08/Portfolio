import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { config } from 'dotenv';

import './app.css';

import Home from './pages/home/home';

import Contact from './pages/contact/contact';

import Blog from './pages/blog/blog';

import Match from './pages/match/match';

import Navigation from './pages/navigation/navigation';

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
