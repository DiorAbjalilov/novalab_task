import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./style.css";
const Navbar = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate("/");
    } else if (newValue === 1) {
      navigate("/profil");
    } else if (newValue === 2) {
      navigate("/login");
    }
  };

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
            <Tab label="Log in" />
          </Tabs>
        </Box>
      </nav>
    </>
  );
};

export default Navbar;
