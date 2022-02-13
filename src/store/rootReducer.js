import { combineReducers } from "redux";
import { createSitesReducer, sitesReducer, updateSitesReducer } from "./site/reducer/sitesReducer";
import { USER_LOGOUT } from "./user/action/userActionsType";
import { signInReducer } from './user/reducer/signInReducer'
import {signUpReducer} from './user/reducer/signupReducer'
import {historyReducer} from './history/reducer/historyReducer'

const appReducer = combineReducers({
  sites: sitesReducer,
  history:historyReducer,
  createSites: createSitesReducer,
  updateSites: updateSitesReducer,
  signin: signInReducer,
  signup: signUpReducer,
})

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}


export default rootReducer;
