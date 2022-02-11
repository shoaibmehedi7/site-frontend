import { SIGNIN_SUCCESS, SIGNUP_SUCCESS } from "./userActionsType";

export function userSignin(data) {
  return {
    type: SIGNIN_SUCCESS,
    payload: data,
  };
}

export function userSignup(data) {
  return {
    type: SIGNUP_SUCCESS,
    payload: data,
  };
}
