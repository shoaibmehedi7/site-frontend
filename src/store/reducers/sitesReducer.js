import {
  ADD_SITES_SUCCESS,
  GET_ALL_SITES_SUCCESS,
  UPDATE_SITES_SUCCESS,
} from "../actions/sitesActionType";

const initState = {
  data: [],
};

export function sitesReducer(state = initState, action) {
  switch (action.type) {
    case GET_ALL_SITES_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}

export function createSitesReducer(state = { data: "" }, action) {
  switch (action.type) {
    case ADD_SITES_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export function updateSitesReducer(state = { data: "" }, action) {
  switch (action.type) {
    case UPDATE_SITES_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
