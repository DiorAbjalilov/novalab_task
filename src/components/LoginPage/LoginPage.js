import React, { useState } from "react";
import { connect } from "react-redux";
import { InputLabel, Input, FormGroup, Button } from "@mui/material";
import { CHANGE_INPUT, SIGUP } from "../../reducer/types";
import { changeInput } from "../../reducer/actions";
import "./style.css";
const LoginPage = () => {
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
            <InputLabel htmlFor="userEmail">User Email</InputLabel>
            <Input id="userEmail" />
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" />
            <Button variant="contained">{login ? "Sign In" : "Sign Up"}</Button>
          </FormGroup>
        </form>
      </section>
    </>
  );
};

export default LoginPage;

// const mapDispatch = {
//   changeInputHandle: changeInput,
// };

// const mapState=(state)=>({state:state.LoginReducer})

// export default connect(mapDispatch)(LoginPage)
