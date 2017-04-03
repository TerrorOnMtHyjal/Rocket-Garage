import * as actions from '../actions/actions';

const initialState= {
  isLoggedIn : false,
  isFetching : false,
  currentlyViewedProfileUID : null,
  userStores : {
    items : []
  },
  viewedStores : {
    items : []
  },
  uid : null
}

export default function userItems(state=initialState, action){
  switch (action.type){
    case actions.UPDATE_LOGIN_STATUS:
      return { ...state, isLoggedIn : action.isLoggedInValue, uid : action.uid };
    case actions.STORE_GET_SUCCESS:
      if( action.storeType === "viewedStore") {
        return {...state, viewedStores : action.store};
      }
        return {...state, userStores : action.store};
    default:
      return state;
  }
}