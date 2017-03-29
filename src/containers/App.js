import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllItems, signIn } from '../actions/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p><a href="http://localhost:8080/api/auth"> Sign In With Steam </a></p>
        <p><button onClick={ () => this.props.dispatch( fetchAllItems() ) }> Show Items </button></p>
      </div>
    );
  }
}

export default connect()(App);
