import NavBarCpn from "../Component/navBarCpn";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
function TrangChuScreen(props) {
  const config = {
    ...props.config,
    location: useLocation().pathname,
    headerHeight: window.innerWidth < 1000 ? 100 : 0,
    backgroundImg: require("../Public/Assets/trangChuBg.png"),
    imgMaxHeight: window.innerWidth < 1000 ? "350px" : "auto",
  };
  return (
    <div className="bg-white">
      <NavBarCpn config={config} />
      <div style={{ height: config.headerHeight }}></div>
      <div>
        <img
          src={config.backgroundImg}
          className="object-fit-cover"
          style={{ width: "100%", height: config.imgMaxHeight }}
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default TrangChuScreen;
