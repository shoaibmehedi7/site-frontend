import { SIGNIN_ERROR, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../action/userActionsType";
const initState = {
  loading: false,
  data: "",
  error: "",
};
export function signInReducer(state = initState, action) {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        data: "",
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
