import React, { Component } from 'react';
import Item from './Item';

export default class ItemList extends Component{

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