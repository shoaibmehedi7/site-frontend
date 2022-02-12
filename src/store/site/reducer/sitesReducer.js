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
} from "../action/sitesActionType";

const initState = {
  loading: false,
  data: [],
  error: "",
};

export function sitesReducer(state = initState, action) {
  switch (action.type) {
    case GET_ALL_SITES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_SITES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case GET_ALL_SITES_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
}

export function createSitesReducer(state = initState, action) {
  switch (action.type) {
    case ADD_SITES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_SITES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case ADD_SITES_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function updateSitesReducer(state =initState, action) {
  switch (action.type) {
    case UPDATE_SITES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SITES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
      case UPDATE_SITES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
