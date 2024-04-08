import NavBarCpn from "../Component/navBarCpn";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
function HoTroScreen(props) {
  const config = {
    ...props.config,
    location: useLocation().pathname,
    headerHeight: window.innerWidth < 1000 ? 270 : 200,
    backgroundImg: require("../Public/Assets/trangChuBg.png"),
  };
  return (
    <div className="bg-white">
      <NavBarCpn config={config} />
      <div style={{ height: config.headerHeight }}></div>
      <div className="c-darkRed fw-bold text-center pb-5">Đang thực hiện</div>
    </div>
  );
}

export default HoTroScreen;
