import * as actions from '../actions/actions';

const initialState= {
  isLoggedIn : false,
  isFetching : false,
  userDetails : {
    uid : undefined,
    username : undefined,
    steamID : undefined
  }
}

export default function appState(state=initialState, action){
  switch (action.type){
    case actions.LOGIN_USER:
      const newUserDetails = {
        uid : action.uid,
        username : action.username,
        steamID : action.steamID
      }
      return { ...state, isLoggedIn : true, userDetails : newUserDetails };
    case actions.LOGOUT_USER:
      return { ...state, isLoggedIn : false, userDetails : initialState.userDetails };
    default:
      return state;
  }
}