import { CHANGE_INPUT } from "./types";
import axios from "axios";
const initialState = {
  signin: {
    userEmail: "",
    password: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      return {
        ...state,
        signin: {
          ...state.signin,
          [action.name]: action.value,
        },
      };
    }
    default:
      return state;
  }
};

export function signIn() {
  const api = "https://reqres.in/api/register";
  return async function (dispatch, getState) {
    try {
      const { userEmail, password } = getState().Login_Reducer.signin;
      const data = {
        email: userEmail,
        password,
      };
      console.log(data);
      const dataFetch = await axios.post(api, data);
      const resData = await dataFetch.data;
      console.log(resData);
      localStorage.setItem("isLoginMeToken", JSON.stringify(resData));
    } catch (err) {
      console.log(err);
    }
  };
}
