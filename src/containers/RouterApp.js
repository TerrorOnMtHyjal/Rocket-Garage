import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const Links = (props) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/edit">My Garage</Link>
    {props.isLoggedIn === true
    ? <Link to="/logout">Logout</Link>
    : <Link to="/api/auth">Login</Link>
    }
  </nav>
);

const LinksRoutes = (props) => (
  <div>
    <Links isLoggedIn={props.isLoggedIn}/>
    <Switch>
      <Route exact path="/" render={ () => <h1>Home Page</h1> }/>
      <Route path="/edit" render={ () => <h1>My Garage</h1> }/>
      <Route path="/:username" render={ () => <h1>User Garage</h1> }/>
      <Route render={ () => <h1>404, bro.</h1> }/>
    </Switch>
  </div>
);

const RouterApp = (props) => (
  <Router>
    <LinksRoutes isLoggedIn={props.isLoggedIn}/>
  </Router>
);

export default RouterApp;