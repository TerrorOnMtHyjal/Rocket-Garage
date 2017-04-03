import React, { Component } from 'react';
import { getStore } from '../actions/actions';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

class Store extends Component {

  componentWillMount() {
    this.props.dispatch(getStore(this.props.match.params.username));
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        {this.props.store 
          ? ( 
              <div>
                <h1>{this.props.store.header}</h1>
                <h3>{this.props.store.subheader}</h3>
                <i><p>Platform: {this.props.store.platform}</p></i>
                <ItemList items={this.props.store.items}/>
              </div>
            )
          : undefined
        }
        
      </div>
    );
  }
}

const mapState = (state) => {
  return { store: state.userState.viewedStores[0] };
};

export default connect(mapState)(Store);