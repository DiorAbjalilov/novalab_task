import React from "react";
import NavbarComponent from "./NavbarPage/Navbar";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage";
import ProfilPage from "./ProfilPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouterPage = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterPage;
