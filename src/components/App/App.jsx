import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import './App.css';

import Home from '../Home/Home';

import Contact from '../Contact/Contact';

import Blog from '../Blog/Blog';

import Match from '../Match/Match';

import Navigation from '../Navigation/Navigation';

// import { config } from 'dotenv';

// config()

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation social={this.props.profile.social}/>

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

const mapStateToProps = state => ({
  profile: state.profile,
})

const mapActionsToProps = state => ({
});

export default connect(mapStateToProps, mapActionsToProps)(App);
