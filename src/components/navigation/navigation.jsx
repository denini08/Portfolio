import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './navigation.css';

export default class Navigation extends Component {
  render () {
    return (
      <div className='nav-container'>
        <img className='nav-logo' alt='Logo'/>

        <nav className='nav-menu'>
          <NavLink className='nav-link' to='/'>Home</NavLink>

          {/* <NavLink className='nav-link' to='/contact'>Contact</NavLink> */}
        </nav>

        <a href='' className='nav-resume'>Resume</a>
      </div>
    )
  }
}