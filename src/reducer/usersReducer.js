import {
  GET_USERS,
  SHOW_LOADER,
  HIDE_LOADER,
  USER_MODAL_HIDE,
  USER_MODAL_SHOW,
} from "./types";
const initialState = {
  users: [],
  loader: false,
  isModal: false,
  userModal: {},
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
    case USER_MODAL_SHOW:
      return { ...state, isModal: true, userModal: action.payload };
    case USER_MODAL_HIDE:
      return { ...state, isModal: false, userModal: {} };
    default:
      return state;
  }
};
