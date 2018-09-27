import { combineReducers } from "redux";
import login from "./auth_reducer";
import register from "./register_reducer";

export default combineReducers({
  login,
  register
});
