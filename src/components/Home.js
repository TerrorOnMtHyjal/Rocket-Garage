import React, { Component } from 'react';

class componentName extends Component {
  render() {
    return (
      <div>
        {this.props.isLoggedIn ? <p>You're logged in!</p> : <p>Home. Please log in to modify your garage.</p>}
      </div>
    );
  }
}

export default componentName;