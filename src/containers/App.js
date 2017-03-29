import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p><a href="/api/auth"> Sign In With Steam </a></p>
        <ItemList />
      </div>
    );
  }
}

export default connect()(App);
