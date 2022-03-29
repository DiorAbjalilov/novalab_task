import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./style.css";
import { usersData } from "../../reducer/actions";
import { useSelector } from "react-redux";
const HomePage = () => {
  const data = useSelector((state) => state);
  console.log(data);
  useEffect(() => {
    usersData();
  }, []);
  return (
    <>
      <header>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                useremail@gmail.com
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 150 }}
            image="https://reqres.in/img/faces/7-image.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </header>
    </>
  );
};

export default HomePage;
