import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
  users_Reducer: usersReducer,
});
