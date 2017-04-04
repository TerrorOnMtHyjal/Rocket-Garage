import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';

import { loginUser } from '../actions/actions';
import Store from './Store';
import Home from '../components/Home';
import TopBar from '../components/TopBar'

class App extends Component {

  componentWillMount(){
    if(cookie.load('accessToken') && this.props.isLoggedIn === false){
      console.log("why this running")
      const { uid, steamID, username } = jwtDecode(cookie.load('accessToken'));
      this.props.dispatch(loginUser(uid, steamID, username));
    }
  }

  render() {
    return (
      <div>
        <TopBar isLoggedIn={this.props.isLoggedIn}/>
        <Router>
          <div>
            <Route exact path="/" render={ () => <Home uid={ this.props.uid } isLoggedIn={ this.props.isLoggedIn }/> }/>
            {/*<Route exact path="/" render={ () => <UserGarage uid={ this.props.uid } isLoggedIn={ this.props.isLoggedIn }/> }/>*/}
            <Route exact path="/:username" component={ Store }/>
          </div>
        </Router>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log(state)
  return {
    isLoggedIn : state.appState.isLoggedIn,
    uid : state.appState.uid
  }
}

export default connect(mapState)(App);
