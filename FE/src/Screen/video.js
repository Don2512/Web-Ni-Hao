import NavBarCpn from "../Component/navBarCpn";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";

function VideoScreen(props) {
  const location = useLocation().pathname;

  return (
    <div>
      <NavBarCpn location={location} />
      <h1>VIDEO</h1>
      <h1>VIDEO</h1>
      <h1>VIDEO</h1>
      <h1>VIDEO</h1>
    </div>
  );
}

export default VideoScreen;
