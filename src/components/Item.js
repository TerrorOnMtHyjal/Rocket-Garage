import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.item.name}</h4>
        <p>{this.props.item.cert}</p>
        <p>{this.props.item.color}</p>
      </div>
    );
  }
}

export default Item;