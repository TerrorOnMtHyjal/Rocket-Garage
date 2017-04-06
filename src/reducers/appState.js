import * as actions from '../actions/actions';
import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';


const initialState= {
  isLoggedIn : cookie.load('accessToken') ? true : false,
  accessToken : cookie.load('accessToken') ? cookie.load('accessToken') : undefined,
  isFetching : false,
  userDetails : cookie.load('accessToken') ? jwtDecode(cookie.load('accessToken')) : undefined
}

export default function appState(state=initialState, action){
  switch (action.type){
    case actions.LOGIN_USER:
      return { ...state };
    case actions.LOGOUT_USER:
      return { 
        isLoggedIn : false,
        accessToken : undefined,
        isFetching : false,
        userDetails : undefined
       };
    default:
      return state;
  }
}