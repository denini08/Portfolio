import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export class Navigation extends Component {
  constructor(props) {
    super(props)

    this.handleSocial()
  }

  handleSocial = () => {
    return this.props.social.map(({title, url, key}) => <a key={key} href={url}>{title}</a>)
  }
  
  render() {
    return (
      <div className='nav-container'>
        <nav className='nav-menu'>
          <NavLink to='/'>Home</NavLink>

          <NavLink to='/contact'>Contact</NavLink>

          <NavLink to='/blog'>Blog</NavLink>
        </nav>

        <nav>
          {this.handleSocial()}
        </nav>
      </div>
    );
  }
}

export default Navigation;
