export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = () => {
  return {
    type : LOGIN_USER
  };
}

export const logoutUser = () => {
  return {
    type : LOGOUT_USER
  };
}