import { combineReducers } from "redux";

import counter from "./counter";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  counter,
  userReducer
});

export default rootReducer;
