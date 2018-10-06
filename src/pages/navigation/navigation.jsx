import React, { Component } from 'react';

import { connect } from 'react-redux';

import { NavigationView } from './navigation-view';

import * as profileActions from '../../components/redux/profile/creator';

import { bindActionCreators } from 'redux';


export class Navigation extends Component {
  constructor(props){
    super(props);

    this.props.profileUpdate([{'title': 'test', url: '', key:4}])
  }

  handleSocial = () => {
    return this.props.profile.social.map(({title, url, key}) => <a key={key} href={url}>{title}</a>)
  }

  render () {
    return (
      <NavigationView handleSocial={this.handleSocial}/>
    )
  }
}

// Bind the store's state to the component

const mapStateToProps = state => ({
  profile: state.profile
})

// Bind the reducer methods to the component

const mapDispatchToProps = dispatch => bindActionCreators(profileActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
