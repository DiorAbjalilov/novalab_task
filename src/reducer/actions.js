import axios from "axios";
import { GET_USERS } from "./types";
export function usersData() {
  const api = "https://reqres.in/api/users?page=1";
  return async function (dispatch) {
    try {
      const userDataFetch = await axios.get(api);
      const resData = await userDataFetch.data;
      dispatch({ type: GET_USERS, payload: resData });
    } catch (err) {
      console.log(err);
    }
  };
}
