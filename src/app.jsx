import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { config } from 'dotenv';

import './app.css';

import Home from './components/home/home';

import Contact from './components/contact/contact';

import Match from './components/match/match';

import Navigation from './components/navigation/navigation';

config()

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />

          <Switch>
            <Route path='/' exact component={Home} />
            
            <Route path='/contact' exact component={Contact} />

            <Route component={Match} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
