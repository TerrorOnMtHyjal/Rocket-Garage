import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const GARAGES_GET_REQUEST = 'GARAGES_GET_REQUEST';
export const GARAGES_GET_SUCCESS = 'GARAGES_GET_SUCCESS';
export const GARAGES_GET_ERROR = 'GARAGES_GET_ERROR';
export const UPDATE_VIEWED_POST_TYPE = 'UPDATE_VIEWED_POST_TYPE';
export const UPDATE_DISPLAYED_GID = 'UPDATE_DISPLAYED_GID';

export const getGarages = (username) => (dispatch, getState) => {
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
  .then(garages => {
    dispatch(garagesGetSuccess(garages));
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

function garagesGetSuccess(garageDetails) {
  let primaryGarage;
  
  for(let garage in garageDetails.garages){
    if(garageDetails.garages[garage].primaryGarage){
      primaryGarage = parseInt(garage, 10);
    } 
  }

  return {
    type : GARAGES_GET_SUCCESS,
    isFetching : false,
    ownerDetails : garageDetails.ownerDetails,
    garages : garageDetails.garages,
    primaryGarage
  };
}

function garagesGetError(err) {
  return {
    type : GARAGES_GET_ERROR,
    isFetching : false,
    err
  };
}

export const updateViewedPostType = (postType) => ({
  type : UPDATE_VIEWED_POST_TYPE,
  postType
});

export const updateDisplayedGID = (gid) => ({
  type : UPDATE_DISPLAYED_GID,
  gid
});

export const loginUser = () => {
  const user = jwtDecode(cookie.load('accessToken'));
  const action = {
    type : LOGIN_USER,
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