import React, { Component } from 'react';
import { getStore, updateItemsType } from '../actions/actions';
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
                <ItemList itemsType={this.props.itemsType} items={this.props.store.items}/>
                <button onClick={() => this.props.dispatch(updateItemsType("have", "viewedStore"))}>Have</button>
                <button onClick={() => this.props.dispatch(updateItemsType("want", "viewedStore"))}>Want</button>
              </div>
            )
          : undefined
        }
        
      </div>
    );
  }
}

const mapState = (state) => {
  return { 
    store: state.userState.viewedStores[0],
    itemsType : state.userState.activeStoreItemType
  };
};

export default connect(mapState)(Store);