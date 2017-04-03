import * as actions from '../actions/actions';

const initialState= {
  isLoggedIn : false,
  isFetching : false,
  currentlyViewedProfileUID : null,
  userItems : [],
  storeItems : [],
  uid : null
}

export default function userItems(state=initialState, action){
  switch (action.type){
    case actions.UPDATE_LOGIN_STATUS:
      return { ...state, isLoggedIn : action.isLoggedInValue, uid : action.uid };
    case actions.ITEMS_GET_SUCCESS:
      if( action.itemsType === "store") {
        return {...state, storeItems : action.items};
      }
        return {...state, userItems : action.items};
    default:
      return state;
  }
}