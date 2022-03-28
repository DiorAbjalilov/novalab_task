import axios from "axios";
import { CHANGE_INPUT } from "./types";
export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});
