import { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../actions/actions';

class Logout extends Component {
  componentWillMount(){
    this.props.dispatch(logoutUser());
  }

  componentDidMount(){
    this.props.history.push("/");
  }
  
  render() {
    return null;
  }
}

export default connect()(Logout);