import React, { useEffect } from "react";
import NavbarComponent from "./NavbarPage/Navbar";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import ProfilPage from "./ProfilPage";
import { Routes, Route, useNavigate } from "react-router-dom";

const RouterPage = () => {
  const navigate = useNavigate();
  const isLoginUserToken = localStorage.getItem("isLoginMeToken");
  useEffect(() => {
    if (isLoginUserToken) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoginUserToken]);

  return (
    <>
      {/* <NavbarComponent /> */}
      <Routes>
        <Route element={<NavbarComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profil" element={<ProfilPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default RouterPage;
