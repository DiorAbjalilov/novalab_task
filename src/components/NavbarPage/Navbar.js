import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./style.css";
import axios from "axios";
const Navbar = () => {
  const [value, setValue] = useState(0);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate("/");
    } else if (newValue === 1) {
      navigate("/profil");
    }
  };

  const isLoginUser = JSON.parse(localStorage.getItem("isLoginMeToken"));
  const fetchUserLogin = async () => {
    const api = `https://reqres.in/api/users/${isLoginUser.id}`;
    const respons = await axios.get(api);
    const resData = await respons.data.data;
    setUserName(resData);
  };
  useEffect(() => {
    fetchUserLogin();
  }, []);

  return (
    <>
      <nav>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <Tab label="Home" />
            <Tab label="Profil" />
          </Tabs>
        </Box>
        <h3>Welcome! {userName.first_name}</h3>
      </nav>
    </>
  );
};

export default Navbar;
