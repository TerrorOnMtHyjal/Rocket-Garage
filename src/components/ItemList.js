import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';

export class ItemList extends Component{

  render(){
    const items = this.props.items;

    return (
      <div className="itemListContainer">
        {items.map((item) => {
          return <Item key={item.uiid} details={item}/>
        })}
      </div>
    );
  }
}

export default connect()(ItemList);