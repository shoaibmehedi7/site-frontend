import {
  ADD_SITES_SUCCESS,
  GET_ALL_SITES_SUCCESS,
  UPDATE_SITES_SUCCESS,
} from "./sitesActionType";

export function getAllSitesSuccess(data) {
  return {
    type: GET_ALL_SITES_SUCCESS,
    payload: data,
  };
}

export function addSitesSuccess(data) {
  return {
    type: ADD_SITES_SUCCESS,
    payload: data,
  };
}

export function updateSitesSuccess(data) {
  return {
    type: UPDATE_SITES_SUCCESS,
    payload: data,
  };
}
