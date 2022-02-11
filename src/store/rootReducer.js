import { combineReducers } from "redux";
import { signInReducer } from "./reducers/signInReducer";
import { signUpReducer } from "./reducers/signupReducer";
import {
  createSitesReducer,
  sitesReducer,
  updateSitesReducer,
} from "./reducers/sitesReducer";

const rootReducer = combineReducers({
  sites: sitesReducer,
  createSites: createSitesReducer,
  updateSites: updateSitesReducer,
  signin: signInReducer,
  signup: signUpReducer,
});

export default rootReducer;
