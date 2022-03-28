import { CHANGE_INPUT } from "./types";

const initialState = {
  signin: {
    userEmail: "",
    password: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        signin: {
          ...state.signin,
          [action.name]: action.value,
        },
      };

    default:
      return state;
  }
};
