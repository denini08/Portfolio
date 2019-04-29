import React, { Component} from 'react';

import './home.css';

import Navigation from '../navigation/navigation';

export default class Home extends Component {
  render() {
    return (
        <div className='box'>
          <div className='box-background'>
            <Navigation />
          </div>
        </div>
    );
  }
}
