export function isLoggedIn() {
  const token = localStorage.getItem("jwt");

  if (token) {
    return true;
  } else {
    return false;
  }
}

export function getToken() {
  return localStorage.getItem("jwt");
}
