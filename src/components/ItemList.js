import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserItems } from '../actions/actions';

export class ItemList extends Component{

  componentWillMount(){
    this.props.dispatch(getUserItems());
  };

  render(){
    const items = this.props.userItems;

    return (
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item.name} {item.color ? item.color : undefined} {item.type ? item.type : undefined}</li>
        })}
      </ul>
    );
  }
}

const mapState = (state) => {
  return { userItems: state.userItems };
};

export default connect(mapState)(ItemList);