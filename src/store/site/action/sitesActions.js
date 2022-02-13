import {
  ADD_SITES_ERROR,
  ADD_SITES_REQUEST,
  ADD_SITES_SUCCESS,
  GET_ALL_SITES_ERROR,
  GET_ALL_SITES_REQUEST,
  GET_ALL_SITES_SUCCESS,
  UPDATE_SITES_ERROR,
  UPDATE_SITES_REQUEST,
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


export function getAllSitesRequest(data) {
  return {
    type: GET_ALL_SITES_REQUEST,
    payload: data,
  };
}

export function addSitesRequest(data) {
  return {
    type: ADD_SITES_REQUEST,
    payload: data,
  };
}

export function updateSitesRequest(data) {
  return {
    type: UPDATE_SITES_REQUEST,
    payload: data,
  };
}



export function getAllSitesError(data) {
  return {
    type: GET_ALL_SITES_ERROR,
    payload: data,
  };
}

export function addSitesError(data) {
  return {
    type: ADD_SITES_ERROR,
    payload: data,
  };
}

export function updateSitesError(data) {
  return {
    type: UPDATE_SITES_ERROR,
    payload: data,
  };
}
