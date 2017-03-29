export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const ALL_ITEMS_REQUEST = 'ALL_ITEMS_REQUEST';
export const ALL_ITEMS_SUCCESS = 'ALL_ITEMS_SUCCESS';
export const ALL_ITEMS_ERROR = 'ALL_ITEMS_ERROR';

export const signIn = () => dispatch => {
  return fetch('http://localhost:9000/auth/steam')
    .then(response => {
      if(!response.ok) {
        console.log("oh look, an error")
        dispatch(errorSignIn(response.statusText));
      }
      console.log(response);
    });
}

function requestSignIn(){
  return {
    type : SIGN_IN_REQUEST,
    isFetching : true
  }
}

function successSignIn(user){
  localStorage.setItem('id_token', user.id_token);

  return {
    type : SIGN_IN_SUCCESS,
    isFetching : false,
    user
  }
}

function errorSignIn(){
  return {
    type : SIGN_IN_ERROR,
    isFetching : false
  }
}


export const fetchAllItems = () => dispatch => {
    const opts = {
      headers : {
        Authorization : `JWT ${document.cookie.split('=')[1]}`
      }
    }
    return fetch('/api/items', opts)
    .then(response => {
      if(!response.ok) {
        console.log("oh look, an error")
      }
      console.log(response);
    });
}

function requestAllItems() {
  return {
    type : ALL_ITEMS_REQUEST,
    isFetching : true
  };
}

function successAllItems() {
  return {
    type : ALL_ITEMS_SUCCESS,
    isFetching : false
  };
}

function errorAllItems() {
  return {
    type : ALL_ITEMS_ERROR,
    isFetching : false
  };
}