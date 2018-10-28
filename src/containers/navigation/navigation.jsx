import React, { Component } from 'react';

import { connect } from 'react-redux';

import { NavigationView } from './navigation-view';

import * as profileActionsCreator from '../../components/redux/profile/creator';

import { bindActionCreators } from 'redux';

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

const mapDispatchToProps = dispatch => bindActionCreators(profileActionsCreator, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
