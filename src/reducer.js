import quiz from "./reducers/quiz";
import { combineReducers } from "redux";

import { reducer as hackerReducer } from "./slices/hacker";
import { reducer as incReducer } from "./slices/inc";

export default combineReducers({
  quiz,
  hackerReducer,
  incReducer,
});
