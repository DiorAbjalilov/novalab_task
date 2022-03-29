import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./style.css";
import { modalUser, usersData } from "../../reducer/actions";
import UserModal from "../UserModal";
import { useSelector, useDispatch } from "react-redux";
import { USER_MODAL_SHOW } from "../../reducer/types";
const HomePage = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users_Reducer);
  useEffect(() => {
    dispatch(usersData());
  }, [dispatch]);
  const ClickPageHandler = (e) => {
    dispatch(usersData(e.target.innerText));
  };
  const isModal = useSelector((state) => state.users_Reducer.isModal);
  return (
    <>
      {isModal ? <UserModal /> : ""}
      <header>
        {users.map((user, index) => {
          return (
            <Card
              key={index}
              sx={{ display: "flex" }}
              onClick={() => dispatch(modalUser(user.id))}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {user.first_name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {user.email}
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={user.avatar}
                alt="Live from space album cover"
              />
            </Card>
          );
        })}
      </header>
      <footer>
        <p onClick={(e) => ClickPageHandler(e)}>1</p>
        <p onClick={(e) => ClickPageHandler(e)}>2</p>
      </footer>
    </>
  );
};

export default HomePage;
