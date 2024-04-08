import NavBarCpn from "../Component/navBarCpn";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";

const backgroundImg = require("../Public/Assets/trangChuBg.png");
function TrangChuScreen(props) {
  const location = useLocation().pathname;
  return (
    <div>
      <NavBarCpn location={location} />
      <div className="p-5 bg-darkBlue"></div>
      <div className="p-5 bg-darkBlue"></div>
      <img src={backgroundImg} className="img-fluid" alt="Logo" />
    </div>
  );
}

export default TrangChuScreen;
