import axios from "axios";
import { getToken } from "./isLoggedIn";
import { baseUrl } from "../constants/endpoints";
export const authAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    authtoken: {
      toString() {
        return `${localStorage.getItem("jwt")}`;
      },
    },
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
