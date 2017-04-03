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
  activeUserItemType : "have",
  activeStoreItemType : "have",
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
    case actions.UPDATE_ITEMS_TYPE:
      if( action.storeType === "viewedStore") {
        return {...state, activeStoreItemType : action.value}
      }

      return {...state, activeUserItemType : action.value}
    default:
      return state;
  }
}