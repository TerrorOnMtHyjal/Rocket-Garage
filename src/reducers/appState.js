import * as actions from '../actions/actions';
import cookie from 'react-cookie';

const initialState= {
  isLoggedIn : cookie.load('accessToken') ? true : false,
  accessToken : cookie.load('accessToken'),
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
      return state;
  }
}