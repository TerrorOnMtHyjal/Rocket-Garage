import * as actions from '../actions/actions';

const initialState= {
  isLoggedIn : false,
  isFetching : false,
  currentlyViewedProfileUID : null,
  userItems : [],
  uid : null
}

export default function userItems(state=initialState, action){
  switch (action.type){
    case actions.UPDATE_LOGIN_STATUS:
      return { ...state, isLoggedIn : action.isLoggedInValue, uid : action.uid };
    default:
      return state;
  }
}