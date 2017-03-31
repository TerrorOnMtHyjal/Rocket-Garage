import * as actions from '../actions/actions';

const initialState= {
  isLoggedIn : false,
  isFetching : false,
  currentlyViewedProfileUID : null,
  userItems : []
}

export default function userItems(state=initialState, action){
  switch (action.type){
    case actions.USER_LOGIN_SUCCESS:
      console.log("logged in!")
      return { ...state, isLoggedIn : true };
    case actions.USER_LOGIN_ERROR:
      return { ...state, isLoggedIn : false };
    default:
      return state;
  }
}