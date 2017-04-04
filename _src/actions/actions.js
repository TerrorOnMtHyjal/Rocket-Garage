export const STORE_GET_REQUEST = 'STORE_GET_REQUEST';
export const STORE_GET_SUCCESS = 'STORE_GET_SUCCESS';
export const STORE_GET_ERROR = 'STORE_GET_ERROR';

export const UPDATE_ITEMS_TYPE = 'UPDATE_ITEMS_TYPE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
import cookie from 'react-cookie';

export const getStore = (username = undefined) => dispatch => {
  const opts = { headers : { Authorization : `JWT ${cookie.load('accessToken')}` } };
  const storeType = username ? "viewedStore" : "userStore";
  
  dispatch(storeGetRequest());
  fetch(username ? `/api/stores/${username}` : '/api/stores', opts)
  .then(response => {
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(store => {
    dispatch(storeGetSuccess(store, storeType));
  })
  .catch(err => {
    dispatch(storeGetError(err));
  });
}

function storeGetRequest() {
  return {
    type : STORE_GET_REQUEST,
    isFetching : true
  };
}

function storeGetSuccess(store, storeType) {
  return {
    type : STORE_GET_SUCCESS,
    isFetching : false,
    store,
    storeType
  };
}

function storeGetError(err) {
  return {
    type : STORE_GET_ERROR,
    isFetching : false,
    err
  };
}

export const updateItemsType = (value, storeType) => {
  return {
    type : UPDATE_ITEMS_TYPE,
    value,
    storeType
  }
}

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