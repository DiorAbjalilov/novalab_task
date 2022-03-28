import React, { useEffect, useState } from "react";
import { InputLabel, Input, FormGroup, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { changeInput } from "../../reducer/actions";
import "./style.css";
import { signIn } from "../../reducer/loginReducer";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.Login_Reducer);
  const dispatch = useDispatch();
  console.log(data);
  const [login, setLogin] = useState(false);
  const ClickLoginHandleTrue = () => {
    setLogin(true);
  };
  const ClickLoginHandleFalse = () => {
    setLogin(false);
  };
  const isLoginUserToken = localStorage.getItem("isLoginMeToken");
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signIn());
    console.log(isLoginUserToken);
    if (isLoginUserToken) {
      navigate("/");
    } else {
      navigate("/login");
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
              name="userEmail"
              onChange={(e) =>
                dispatch(changeInput(e.target.name, e.target.value))
              }
            />
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              onChange={(e) =>
                dispatch(changeInput(e.target.name, e.target.value))
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
