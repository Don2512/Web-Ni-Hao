import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";

const logo = require("../Public/Assets/logo.png");

const NavBarCpn = (props) => {
  const config = {
    ...props.config,
    baseFooterFontSize: window.innerWidth < 1000 ? "14px" : "20px",
    titleFooterFontSize: window.innerWidth < 1000 ? "17px" : "25px",
    logoSize: window.innerWidth < 1000 ? "100px" : "70px",
    navElementWidth: window.innerWidth < 1000 ? "100px" : "190px",
  };
  const navList = [
    { name: "主页", path: "trangChu" },
    { name: "概述", path: "tongQuan" },
    { name: "笔记本", path: "soTay" },
    { name: "练习", path: "baiTap" },
    { name: "视频", path: "video" },
    { name: "论坛", path: "dienDan" },
    { name: "帮助", path: "hoTro" },
  ];
  const handleClick = (path) => {
    window.scrollTo(0, 0);
    console.log(path);
  };
  const location = config.location;
  const page = location.split("/")[1];

  return (
    <div className="header bg-darkBlue p-3 position-fixed container-fluid z-3">
      <div className="header-container row justify-content-between">
        <div className="text-white fs-1 logo col-lg-3 col-2 align-self-center fw-bold valign">
          <img
            src={logo}
            className="img-fluid"
            style={{ maxHeight: config.logoSize }}
            alt="Logo"
          />
        </div>
        <div className="col-lg-6 col-10">
          <div className="row pt-3 justify-content-end">
            {navList.map((item, index) => (
              <div
                key={index}
                className={
                  "text-white col-lg col-md-3 col-sm-3 px-2 border-start border-white lh-20 valign hover-mouse hover-bold hover-bigger" +
                  (page == item.path ? " fw-bold bigger" : "")
                }
                style={{ maxWidth: config.navElementWidth }}>
                <Link
                  to={
                    location.split("/").slice(0, 1).join("/") + "/" + item.path
                  }
                  onClick={() => {
                    handleClick(item.path);
                  }}
                  style={{ textDecoration: "none" }}>
                  <div className="text-white text-decoration-none">
                    {item.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBarCpn;
