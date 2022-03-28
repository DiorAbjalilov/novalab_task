import React, { useState } from "react";
import { InputLabel, Input, FormGroup, Button } from "@mui/material";
import "./style.css";
const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [login, setLogin] = useState(false);
  const ClickLoginHandleTrue = () => {
    setLogin(true);
  };
  const ClickLoginHandleFalse = () => {
    setLogin(false);
  };
  return (
    <>
      {/* Login Page */}
      <section className="login">
        <form>
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
            <h2>{login ? "Sign In" : "Sign Up"}</h2>
            <InputLabel htmlFor="userName">User Name</InputLabel>
            <Input id="userName" />
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" />
            <Button variant="contained">{login ? "Sign In" : "Sign Up"}</Button>
          </FormGroup>
        </form>
      </section>
    </>
  );
};

export default index;
