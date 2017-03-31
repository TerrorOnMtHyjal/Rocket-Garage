import React, { Component } from 'react';
import { getUserItems } from '../actions/actions';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

class UserStore extends Component {

  componentWillMount() {
    this.props.dispatch(getUserItems(this.props.match.params.username));
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
  return { items: state.userItems };
};

export default connect(mapState)(UserStore);