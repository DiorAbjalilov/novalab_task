import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { USER_MODAL_HIDE } from "../../reducer/types";
const Index = () => {
  const dispatch = useDispatch();
  const [userValue, setUserValue] = useState("");
  const { userModal } = useSelector((state) => state.users_Reducer);
  useEffect(() => {
    setUserValue(userModal);
  }, []);
  return (
    <div className="modal">
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {userValue.first_name}
            </Typography>
            <Typography component="div" variant="h5">
              {userValue.last_name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {userValue.email}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={userValue.avatar}
          alt="Live from space album cover"
        />
      </Card>
      <Button
        onClick={() => dispatch({ type: USER_MODAL_HIDE })}
        variant="contained"
      >
        close
      </Button>
    </div>
  );
};

export default Index;
