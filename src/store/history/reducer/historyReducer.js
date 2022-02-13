import { GET_HISTORIES_ERROR, GET_HISTORIES_REQUEST, GET_HISTORIES_SUCCESS } from "../action/historyActionType";
const initState = {
  loading: false,
  data: [],
  error: "",
};

export function historyReducer(state = initState, action) {
  switch (action.type) {
    case GET_HISTORIES_REQUEST:
      return {
        ...state,
        data: [],
        error: "",
        loading: true,
      };
    case GET_HISTORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case GET_HISTORIES_ERROR:
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