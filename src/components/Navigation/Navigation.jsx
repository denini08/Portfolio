import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

export class Navigation extends Component {
  handleSocial = () => {
    return this.props.profile.social.map(({title, url, key}) => <a key={key} href={url}>{title}</a>)
  }

  componentDidMount = () => {
    this.handleSocial()
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

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps)(Navigation);
