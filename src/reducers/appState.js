import * as actions from '../actions/actions'

const initialState= {
  isLoggedIn : true,
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
      return { ...state, isLoggedIn : true};
    case actions.LOGOUT_USER:
      return { ...state, isLoggedIn : false};
    default:
      console.log("default")
      return state;
  }
}