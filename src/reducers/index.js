import { combineReducers } from "redux";
import UserReducer from "./reducer-users";
import ActiveUserReducer from "./reducer-active";

const allReducers = combineReducers({
  userReducer: UserReducer,
  activeReducer: ActiveUserReducer,
});

export default allReducers;
