export const USER_ITEMS_REQUEST = 'USER_ITEMS_REQUEST';
export const USER_ITEMS_SUCCESS = 'USER_ITEMS_SUCCESS';
export const USER_ITEMS_ERROR = 'USER_ITEMS_ERROR';
export const UPDATE_LOGIN_STATUS = 'UPDATE_LOGIN_STATUS';

export const getUserItems = (username) => dispatch => {
    const opts = {
      headers : {
        Authorization : `JWT ${document.cookie.split('=')[1]}`
      }
    }
    dispatch(requestUserItems());
    return fetch(`/api/items/${username}`, opts)
    .then(response => {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(userItems => {
      dispatch(successUserItems(userItems));
    })
    .catch(err => {
      dispatch(errorUserItems(err));
    });
}

function requestUserItems() {
  return {
    type : USER_ITEMS_REQUEST,
    isFetching : true
  };
}

function successUserItems(userItems) {
  return {
    type : USER_ITEMS_SUCCESS,
    isFetching : false,
    userItems
  };
}

function errorUserItems(err) {
  return {
    type : USER_ITEMS_ERROR,
    isFetching : false,
    err
  };
}

export const updateLoginStatus = (value) => {
  return {
    type : UPDATE_LOGIN_STATUS,
    isLoggedInValue : value
  };
}

