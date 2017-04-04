import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="itemContainer">
        <div className="itemName"><p>Name: {this.props.details.name}</p></div>
        { this.props.details.color ? <div className="itemPaint"><p>Paint : {this.props.details.color}</p></div> : undefined }
        { this.props.details.cert ? <div className="itemCert"><p>Cert : {this.props.details.cert}</p></div> : undefined }
      </div>
    );
  }
}

export default Item;