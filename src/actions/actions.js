import cookie from 'react-cookie';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = () => {
  return {
    type : LOGIN_USER
  };
}

export const logoutUser = () => {
  cookie.remove('accessToken');
  return {
    type : LOGOUT_USER
  };
}