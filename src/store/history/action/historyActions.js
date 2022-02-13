import {GET_HISTORIES_ERROR, GET_HISTORIES_REQUEST, GET_HISTORIES_SUCCESS} from './historyActionType'
export function getHistoriesSuccess(data) {
  return {
    type: GET_HISTORIES_SUCCESS,
    payload: data,
  };
}
export function getHistoriesRequest(data) {
  return {
    type: GET_HISTORIES_REQUEST,
    payload: data,
  };
}
export function getHistoriesError(data) {
  return {
    type: GET_HISTORIES_ERROR,
    payload: data,
  };
}