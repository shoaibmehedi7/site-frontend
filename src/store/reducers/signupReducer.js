import { SIGNUP_SUCCESS } from "../actions/userActionsType";

export function signUpReducer(state = { data: "" }, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
