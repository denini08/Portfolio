import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render () {
    return (
      <div className='nav-container'>
        <nav className='nav-menu'>
          <NavLink to='/'>Home</NavLink>

          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </div>
    )
  }
}