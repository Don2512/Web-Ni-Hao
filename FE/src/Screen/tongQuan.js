import NavBarCpn from "../Component/navBarCpn";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
function TongQuanScreen(props) {
  const screenWidth = window.innerWidth;
  const config = {
    ...props.config,
    location: useLocation().pathname,
    headerHeight: screenWidth < 1000 ? 160 : 120,
    duoyinFontSize: screenWidth < 1000 ? "30px" : "80px",
    duoyinFontWeight: screenWidth < 1000 ? 700 : 700,
    soTayPng: require("../Public/Assets/soTay.png"),
    baiTapPng: require("../Public/Assets/baiTap.png"),
    videoPng: require("../Public/Assets/video.png"),
    imgHeight: screenWidth < 1000 ? "130px" : "500px",
  };
  return (
    <div className="bg-darkRed container-fluid px-0 text-white">
      <NavBarCpn config={config} />
      <div style={{ height: config.headerHeight }}></div>
      <div
        className="text-center m-0 p-0"
        style={{
          fontSize: config.duoyinFontSize,
          fontWeight: config.duoyinFontWeight,
        }}>
        DUOYIN
      </div>
      <div className="row justify-content-center px-4 m-0 p-0">
        <div className="col-lg-6 col-12 self-align-center ">
          <div style={{ textAlign: "justify" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </div>
        </div>
      </div>

      <div className="fs-1 fw-bold mb-5 text-center mt-5 pt-5">
        Các tính năng nổi bật
      </div>
      <div className="row mx-0 justify-content-center">
        <div className="col-lg-10 col-12 self-align-center">
          <div className="pb-5">
            <div className="row justify-content-start px-0 mx-0">
              <div className="col-auto text-center">
                <img
                  src={config.soTayPng}
                  style={{ height: config.imgHeight }}
                />
                <div className="fw-bold fs-2">Sổ tay</div>
              </div>
            </div>
            <div className="row justify-content-end px-0 mx-0">
              <div className="col-auto text-center">
                <img
                  src={config.baiTapPng}
                  style={{ height: config.imgHeight }}
                />
                <div className="fw-bold fs-2">Bài tập</div>
              </div>
            </div>
            <div className="row justify-content-start px-0 mx-0">
              <div className="col-auto text-center">
                <img
                  src={config.videoPng}
                  style={{ height: config.imgHeight }}
                />
                <div className="fw-bold fs-2">Video</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TongQuanScreen;
