import React, { Component } from 'react';
import { getUserItems } from '../actions/actions';
import { connect } from 'react-redux';

class UserStore extends Component {

  componentWillMount() {
    this.props.dispatch(getUserItems(this.props.match.params.username));
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <p>{this.props.match.params.username}</p>
      </div>
    );
  }
}

export default connect()(UserStore);