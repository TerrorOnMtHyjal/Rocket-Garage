import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const GARAGES_GET_REQUEST = 'GARAGES_GET_REQUEST';
export const GARAGES_GET_SUCCESS = 'GARAGES_GET_SUCCESS';
export const GARAGES_GET_ERROR = 'GARAGES_GET_ERROR';

export const getGarages = (username = undefined) => (dispatch, getState) => {
  const currentState = getState();
  const opts = { headers : { Authorization : `JWT ${currentState.appState.token}` } };

  dispatch(garagesGetRequest());

  fetch(`/api/garages/${username}`, opts)
  .then(response => {
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(garagesArray => {
    const isUserGarage = currentState.appState.userDetails && currentState.appState.userDetails.uid === garagesArray[0].owner_uid ? true : false;
    const garages = {};

    garagesArray.forEach(garage => {
      garages[garage.gid] = garage;
    });

    dispatch(garagesGetSuccess(garages, isUserGarage));
  })
  .catch(err => {
    dispatch(garagesGetError(err));
  });
}

function garagesGetRequest() {
  return {
    type : GARAGES_GET_REQUEST,
    isFetching : true
  };
}

function garagesGetSuccess(garages, isUserGarage) {
  return {
    type : GARAGES_GET_SUCCESS,
    isFetching : false,
    garages,
    isUserGarage
  };
}

function garagesGetError(err) {
  return {
    type : GARAGES_GET_ERROR,
    isFetching : false,
    err
  };
}

export const loginUser = () => {
  const user = jwtDecode(cookie.load('accessToken'));
  const garages = jwtDecode(cookie.load('userGarages'));
  const action = {
    type : LOGIN_USER,
    user,
    garages
  }
  cookie.remove('userGarages');
  return action;
}

export const logoutUser = () => {
  cookie.remove('accessToken');
  return {
    type : LOGOUT_USER
  };
}