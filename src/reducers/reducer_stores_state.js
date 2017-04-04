import * as actions from '../actions/actions';

const initialState= {
  stores : {
    viewed : {
      uid : undefined,
      items : [],
      activeItemType : "have"
    },
    user : {
      uid : undefined,
      items : [],
      activeItemType : "have"
    }
  }
}

export default function storeState(state=initialState, action){
  return state;
}