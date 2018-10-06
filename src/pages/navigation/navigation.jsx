import React, { Component } from 'react';

import { connect } from 'react-redux';

import { NavigationView } from './navigation-view';

export class Navigation extends Component {
  handleSocial = () => {
    return this.props.profile.social.map(({title, url, key}) => <a key={key} href={url}>{title}</a>)
  }

  render () {
    return (
      <NavigationView handleSocial={this.handleSocial}/>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps)(Navigation);
