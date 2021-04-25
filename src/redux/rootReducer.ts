import { combineReducers } from "redux";
import { reducer as itemReducer } from "./Item";

const rootReducer = combineReducers({
  item: itemReducer,
});

export default rootReducer;
