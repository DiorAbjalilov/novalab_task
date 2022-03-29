import axios from "axios";
import { GET_USERS, USER_MODAL_SHOW } from "./types";
export function usersData(page = 1) {
  const api = `https://reqres.in/api/users?page=${page}`;
  return async function (dispatch) {
    try {
      const userDataFetch = await axios.get(api);
      const resData = await userDataFetch.data;
      dispatch({ type: GET_USERS, payload: resData.data });
    } catch (err) {
      console.log(err);
    }
  };
}
export function modalUser(id) {
  const api = `https://reqres.in/api/users/${id}`;
  return async function (dispatch) {
    try {
      const userDataFetch = await axios.get(api);
      const resData = await userDataFetch.data;
      dispatch({ type: USER_MODAL_SHOW, payload: resData.data });
    } catch (err) {
      console.log(err);
    }
  };
}
