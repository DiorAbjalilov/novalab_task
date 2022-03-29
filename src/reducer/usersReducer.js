import { GET_USERS, SHOW_LOADER, HIDE_LOADER } from "./types";
const initialState = {
  users: [],
  loader: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case SHOW_LOADER:
      return { ...state, loader: true };
    case HIDE_LOADER:
      return { ...state, loader: false };
    default:
      return state;
  }
};
