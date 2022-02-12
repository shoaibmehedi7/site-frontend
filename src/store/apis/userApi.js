import axios from "axios";
import { toast } from "react-toastify";
import { asyncLocalStorage } from "../../utils/asyncLocalStorage";
import { apiEndPoint, baseUrl } from "../../utils/endpoints";
import { userSignin, userSignup } from "../actions/userActions";

export function signInApi(data) {
  return (dispatch) => {
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
              dispatch(userSignin(response.data.data));
            });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
}

export function signupApi(data) {
  return (dispatch) => {
    axios
      .post(baseUrl + apiEndPoint.SIGNUP, data)
      .then((response) => {
        dispatch(userSignup(response.data.data));
        toast.success("Successfully registered");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
}
