import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export class NavigationView extends Component {
  render() {
    return (
      <div className='nav-container'>
        <nav className='nav-menu'>
          <NavLink to='/'>Home</NavLink>

          <NavLink to='/contact'>Contact</NavLink>

          <NavLink to='/blog'>Blog</NavLink>
        </nav>

        <nav>
          {this.props.handleSocial()}
        </nav>
      </div>
    );
  }
}
