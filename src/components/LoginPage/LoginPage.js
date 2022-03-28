import React, { useState } from "react";
import { InputLabel, Input, FormGroup, Button } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
// import { CHANGE_INPUT, SIGUP } from "../../reducer/types";
import { changeInput } from "../../reducer/actions";
import "./style.css";
const LoginPage = ({ mapDispatchToProps, mapStateToProps }) => {
  // const data = useSelector((state) => state.Login_Reducer);
  // const dispatch = useDispatch();
  // console.log(data);
  const [login, setLogin] = useState(false);
  // const [userEmail, setUserEmail] = useState(data.signin);
  const ClickLoginHandleTrue = () => {
    setLogin(true);
  };
  const ClickLoginHandleFalse = () => {
    setLogin(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userEmail);
    // dispatch(changeInput(userEmail));
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
            <h2>{login ? "Sign In" : "Sign Up"}</h2>
            <InputLabel htmlFor="userEmail">User Email</InputLabel>
            <Input
              id="userEmail"
              name="userEmail"
              // onChange={(e) =>
              //   dispatch(changeInput(e.target.name, e.target.value))
              // }
            />
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              // onChange={(e) =>
              //   dispatch(changeInput(e.target.name, e.target.value))
              // }
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

// export default LoginPage;

const mapDispatchToProps = {
  changeInputHandler: changeInput,
};

const mapStateToProps = (state) => ({ state: state.Login_Reducer.signin });

export default connect(mapDispatchToProps, mapStateToProps)(LoginPage);
