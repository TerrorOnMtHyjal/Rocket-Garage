import React, { Component } from 'react';
import { getStore } from '../actions/actions';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

class UserStore extends Component {

  componentWillMount() {
    this.props.dispatch(getStore());
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <ItemList items={this.props.items}/>
      </div>
    );
  }
}

const mapState = (state) => {
  return { items: state.userState.userItems };
};

export default connect(mapState)(UserStore);