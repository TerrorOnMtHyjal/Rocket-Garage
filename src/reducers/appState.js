import * as actions from '../actions/actions';
import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';


const initialState= {
  isLoggedIn : cookie.load('accessToken') ? true : false,
  accessToken : cookie.load('accessToken') ? cookie.load('accessToken') : undefined,
  isFetching : false,
  userDetails : cookie.load('accessToken') ? jwtDecode(cookie.load('accessToken')) : undefined,
  displayedGID : undefined,
  displayedPostType : "have"
}

export default function appState(state=initialState, action){
  switch (action.type){
    case actions.UPDATE_VIEWED_POST_TYPE:
      return { ...state, displayedPostType : action.postType}
    case actions.GARAGES_GET_SUCCESS:
      return { ...state, displayedGID : action.displayedGID }
    case actions.LOGIN_USER:
      return { ...state };
    case actions.LOGOUT_USER:
      return { 
        isLoggedIn : false,
        accessToken : undefined,
        isFetching : false,
        userDetails : undefined,
        displayedGID : undefined
       };
    default:
      return state;
  }
}