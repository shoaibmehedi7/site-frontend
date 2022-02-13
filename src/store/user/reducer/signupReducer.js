import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../action/userActionsType";
const initState = {
  loading: false,
  data: [],
  error: "",
};
export function signUpReducer(state = initState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
      case SIGNUP_ERROR:
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
