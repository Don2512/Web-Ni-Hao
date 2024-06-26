import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import {ReactComponent as TrangChu} from '../Public/Assets/trangChu.svg';
import {ReactComponent as TongQuan} from '../Public/Assets/tongQuan.svg';
import {ReactComponent as SoTay} from '../Public/Assets/soTay.svg';
import {ReactComponent as BaiTap} from '../Public/Assets/baiTap.svg';
import {ReactComponent as Video} from '../Public/Assets/video.svg';
import {ReactComponent as DienDan} from '../Public/Assets/dienDan.svg';
import {ReactComponent as HoTro} from '../Public/Assets/hoTro.svg';

 
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
    { name: "主页", path: "trangChu" ,icon: <TrangChu />},
    { name: "概述", path: "tongQuan",icon: <TongQuan />},
    { name: "笔记本", path: "soTay", icon: <SoTay />},
    { name: "练习", path: "baiTap", icon:  <BaiTap />},
    { name: "视频", path: "video" , icon: <Video />},
    // { name: "论坛", path: "dienDan" },
    // { name: "帮助", path: "hoTro", icon: <HoTro /> },
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
        <div className="col-lg-6 col-10 justify-content-center">
          <div className="row pt-3 justify-content-center">
            {navList.map((item, index) => (
              <div
                key={index}
                className={
                  "text-white col-lg col-md-3 col-sm-3 px-2  lh-20 valign hover-mouse hover-bold hover-bigger" +
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
                  <div className="d-flex flex-row">
                    {item.icon}
                    <div className="text-white text-decoration-none">
                      {item.name}
                    </div>
                  </div>
                   
                </Link>
              </div>
            ))}

            <div
              className={
                "text-white col-lg col-md-3 col-sm-3 px-2  lh-20 valign hover-mouse hover-bold hover-bigger"
              }
              style={{ maxWidth: "120px" }}>
              <a
                href="https://www.facebook.com/profile.php?id=61557907629340&mibextid=ZbWKwL"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer">
                  <div className="d-flex flex-row">
                    <DienDan />
                    <div className="text-white text-decoration-none">{"论坛"}</div>
                  </div>
              </a>
            </div>

            <div
              className={
                "text-white col-lg col-md-3 col-sm-3 px-2  lh-20 valign hover-mouse hover-bold hover-bigger"
              }
              style={{ maxWidth: "120px" }}>
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=duoyinzi99@gmail.com"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer">
                  <div className="d-flex flex-row">
                    <HoTro />
                    <div className="text-white text-decoration-none">{"帮助"}</div>
                  </div>
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBarCpn;
