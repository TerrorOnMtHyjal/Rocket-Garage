export const ITEMS_GET_REQUEST = 'ITEMS_GET_REQUEST';
export const ITEMS_GET_SUCCESS = 'ITEMS_GET_SUCCESS';
export const ITEMS_GET_ERROR = 'ITEMS_GET_ERROR';
export const UPDATE_LOGIN_STATUS = 'UPDATE_LOGIN_STATUS';
import cookie from 'react-cookie';

export const getItems = (username = undefined) => dispatch => {
  const opts = { headers : { Authorization : `JWT ${cookie.load('accessToken')}` } };
  const itemsType = username ? "store" : "user";
  
  dispatch(itemsGetRequest());
  fetch(username ? `/api/items/${username}` : '/api/items', opts)
  .then(response => {
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(items => {
    dispatch(itemsGetSuccess(items, itemsType));
  })
  .catch(err => {
    dispatch(itemsGetError(err));
  });
}

function itemsGetRequest() {
  return {
    type : ITEMS_GET_REQUEST,
    isFetching : true
  };
}

function itemsGetSuccess(items, itemsType) {
  return {
    type : ITEMS_GET_SUCCESS,
    isFetching : false,
    items,
    itemsType
  };
}

function itemsGetError(err) {
  return {
    type : ITEMS_GET_ERROR,
    isFetching : false,
    err
  };
}

export const updateLoginStatus = (isLoggedInValue, uid) => {
  return {
    type : UPDATE_LOGIN_STATUS,
    isLoggedInValue,
    uid
  };
}

