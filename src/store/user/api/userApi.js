import axios from "axios";
import { toast } from "react-toastify";
import { asyncLocalStorage } from "../../../utils/asyncLocalStorage";
import { apiEndPoint, baseUrl } from "../../../constants/endpoints";
import {
  userSigninError,
  userSigninRequest,
  userSigninSuccess,
  userSignout,
  userSignupError,
  userSignupRequest,
  userSignupSuccess,
} from "../action/userActions";

export function signInApi(data) {
  return (dispatch) => {
    dispatch(userSigninRequest());
    axios
      .post(baseUrl + apiEndPoint.SIGNIN, data)
      .then((response) => {
        if (response && response.data) {
          asyncLocalStorage
            .setItem("jwt", response.data.data.jwtToken)
            .then(() => {
              return asyncLocalStorage.getItem("jwt");
            })
            .then((token) => {
              dispatch(userSigninSuccess(response.data.data));
            });
        }
      })
      .catch((error) => {
        dispatch(userSigninError(error.message));
        toast.error(error.message);
      });
  };
}

export function signupApi(data) {
  return (dispatch) => {
    dispatch(userSignupRequest());
    axios
      .post(baseUrl + apiEndPoint.SIGNUP, data)
      .then((response) => {
        if (response && response.data) {
          asyncLocalStorage
            .setItem("jwt", response.data.data.jwtToken)
            .then(() => {
              return asyncLocalStorage.getItem("jwt");
            })
            .then((token) => {
              toast.success("Successfully registered");
              dispatch(userSignupSuccess(response.data.data));
            });
        }
      })
      .catch((error) => {
        dispatch(userSignupError(error.message));
        toast.error(error.message);
      });
  };
}

export function signoutApi() {
  return (dispatch) => {
    localStorage.clear();
    window.location.reload();
    dispatch(userSignout());
  };
}
