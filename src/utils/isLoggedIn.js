import jwt from 'jwt-decode'

export function isLoggedIn() {
  const token = getToken();
  if (token) {
    return true;
  } else {
    return false;
  }
}

export function getToken() {
  return localStorage.getItem("jwt");
}

export function getNameFromJWT() {
  return jwt(getToken()).userName;
}
