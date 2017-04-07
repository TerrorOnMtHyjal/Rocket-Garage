import * as actions from '../actions/actions';
import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';


const initialState= {
  isLoggedIn : cookie.load('accessToken') ? true : false,
  accessToken : cookie.load('accessToken') ? cookie.load('accessToken') : undefined,
  isFetching : false,
  userDetails : cookie.load('accessToken') ? jwtDecode(cookie.load('accessToken')) : undefined,
  displayed : {
    username : undefined,
    gid : undefined,
    postType : "have",
  }
}

export default function appState(state=initialState, action){
  switch (action.type){
    case actions.UPDATE_VIEWED_POST_TYPE:
      return { ...state, displayed : {...state.displayed, postType : action.postType}};
    case actions.UPDATE_DISPLAYED_GID:
      return { ...state, displayed : {...state.displayed, gid : action.gid}};
    case actions.GARAGES_GET_SUCCESS:
      return { ...state, displayed : {...state.displayed, gid : action.primaryGarage, username : action.ownerDetails.username}};
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