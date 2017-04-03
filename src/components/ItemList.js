import React, { Component } from 'react';
import Item from './Item';

export default class ItemList extends Component{

  render(){
    const items = this.props.items;
    const itemsType = this.props.itemsType;

    return (
      <div className="itemListContainer">
        {items.map((item) => {
          if(itemsType === item.postType){
            return <Item key={item.uiid} details={item}/>
          }
          return undefined;
        })}
      </div>
    );
  }
}