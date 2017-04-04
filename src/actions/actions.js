export const STORE_GET_REQUEST = 'STORE_GET_REQUEST';
export const STORE_GET_SUCCESS = 'STORE_GET_SUCCESS';
export const STORE_GET_ERROR = 'STORE_GET_ERROR';

export const UPDATE_ITEMS_TYPE = 'UPDATE_ITEMS_TYPE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
import cookie from 'react-cookie';

export const loginUser = (uid, username, steamID) => {
  return {
    type : LOGIN_USER,
    uid,
    username,
    steamID
  };
}

export const logoutUser = () => {
  return {
    type : LOGOUT_USER
  };
}