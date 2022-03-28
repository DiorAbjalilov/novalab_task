import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

export const rootReducer = combineReducers({
  Login_Reducer: loginReducer,
});
