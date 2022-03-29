import React, { useState } from "react";
import { InputLabel, Input, FormGroup, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useDispatch } from "react-redux";
import { SHOW_LOADER, HIDE_LOADER } from "../../reducer/types";

const LoginPage = () => {
  const [login, setLogin] = useState(false);
  const [valueUserInput, setValueUserInput] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ClickLoginHandleTrue = () => {
    setLogin(true);
  };
  const ClickLoginHandleFalse = () => {
    setLogin(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = valueUserInput;
    const data = {
      email,
      password,
    };
    if (login) {
      dispatch({ type: SHOW_LOADER });
      const api = "https://reqres.in/api/login";
      const dataFetch = await axios.post(api, data);
      const resData = await dataFetch.data;
      localStorage.setItem("isLoginMeToken", JSON.stringify(resData));
      const isLoginUserToken = localStorage.getItem("isLoginMeToken");
      if (isLoginUserToken) {
        navigate("/");
        setTimeout(() => {
          dispatch({ type: HIDE_LOADER });
        }, 2000);
      } else {
        navigate("/login");
      }
    } else {
      const api = "https://reqres.in/api/register";
      const dataFetch = await axios.post(api, data);
      const resData = await dataFetch.data;
      localStorage.setItem("isLoginMeToken", JSON.stringify(resData));
      const isLoginUserToken = localStorage.getItem("isLoginMeToken");
      if (isLoginUserToken) {
        navigate("/");
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <>
      <section className="login">
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <div>
              <Button
                onClick={ClickLoginHandleTrue}
                variant={`${login ? "outlined" : "text"}`}
              >
                Sign In
              </Button>
              <Button
                onClick={ClickLoginHandleFalse}
                variant={`${login ? "text" : "outlined"}`}
              >
                Sign Up
              </Button>
            </div>
            <InputLabel htmlFor="userEmail">User Email</InputLabel>
            <Input
              id="userEmail"
              name="email"
              onChange={(e) =>
                setValueUserInput({ [e.target.name]: e.target.value })
              }
            />
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              onChange={(e) =>
                setValueUserInput({
                  ...valueUserInput,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <Button type="submit" variant="contained">
              {login ? "Sign In" : "Sign Up"}
            </Button>
          </FormGroup>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
