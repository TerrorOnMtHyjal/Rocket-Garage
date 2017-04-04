import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';



const Routes = () => (
    <div>
      
      <Switch>
        <Route exact path="/" render={ () => <Home/> }/>
        <Route exact path="/edit" render={ () => <UserGarage uid={ this.props.uid } isLoggedIn={ this.props.isLoggedIn }/> }/>
        <Route exact path="/:username" component={ Garage }/>
      </Switch>
    </div>
);

const RouterApp = () => (
  <Router>
    <Routes />
  </Router>
);

export default RouterApp;