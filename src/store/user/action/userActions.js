import { SIGNIN_ERROR, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS, USER_LOGOUT } from "./userActionsType";

export function userSigninRequest() {
  return {
    type: SIGNIN_REQUEST
  };
}

export function userSignupRequest() {
  return {
    type: SIGNUP_REQUEST,
  };
}

export function userSigninSuccess(data) {
  return {
    type: SIGNIN_SUCCESS,
    payload: data,
  };
}

export function userSignupSuccess(data) {
  return {
    type: SIGNUP_SUCCESS,
    payload: data,
  };
}

export function userSigninError(data) {
  return {
    type: SIGNIN_ERROR,
    payload: data,
  };
}

export function userSignupError(data) {
  return {
    type: SIGNUP_ERROR,
    payload: data,
  };
}


export function userSignout() {
  return {
    type: USER_LOGOUT,
    payload: null,
  };
}
