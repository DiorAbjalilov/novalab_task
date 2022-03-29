import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Index = () => {
  const [userName, setUserName] = useState("");
  const isLoginUser = JSON.parse(localStorage.getItem("isLoginMeToken"));
  const navigate = useNavigate();

  const ClickLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

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
    <div className="body">
      <div className="outer-div">
        <div className="inner-div">
          <div className="front">
            <div className="front__bkg-photo"></div>
            <div
              className="front__face-photo"
              style={{ backgroundImage: `url(${userName.avatar})` }}
            ></div>
            <div className="front__text">
              <h3 className="front__text-header">{userName.first_name}</h3>
              <h3 className="front__text-header">{userName.last_name}</h3>
              <p className="front__text-para">
                <i className="fas fa-map-marker-alt front-icons"></i>
                {userName.email}
              </p>
              <span className="front__text-hover" onClick={ClickLogout}>
                log out profil
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
