import { SIGNIN_SUCCESS } from "../actions/userActionsType";

export function signInReducer(state = { data: "" }, action) {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
