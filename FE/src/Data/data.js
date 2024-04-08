import React, { useState, useEffect } from "react";
import "../Public/style.css";
import { HashRouter, Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";

import Footer from "../Component/footerCpn";

import SoTayScreen from "../Screen/soTayScreen";
import BaiTapScreen from "../Screen/baiTapScreen";
import TrangChuScreen from "../Screen/trangChu";
import TongQuanScreen from "../Screen/tongQuan";
import VideoScreen from "../Screen/video";
import DienDanScreen from "../Screen/dienDan";
import HoTroScreen from "../Screen/hoTroScreen";
import SoTayDetailScreen from "../Screen/soTayDetailScreen";
function Data() {
  const [soTayData, setSoTayData] = useState([]);
  const [baiTapData, setBaiTapData] = useState([]);
  const config = {
    pageIndex: 2,
    wordIndex: 1,
    amDoc_1_Index: 4,
    idIndex: 0,
    amDocLength: 4,
    soTayDataStartRow: 1,
    baiTapDataStartRow: 1,
    soNetVeIndex: 2,
    soAmDocIndex: 3,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sheets.googleapis.com/v4/spreadsheets/1fSWPkmCz8zNjGquFN0yIOpP_p578t0ij-RERcHxoDr0/values/soTay?key=AIzaSyAQj26vYu-gkIeBTTiwinN3VPEYGfLQ-Y8"
        );
        console.log(response);
        setSoTayData(
          response.data.values.splice(config.soTayDataStartRow)
          // .sort((a, b) => a[4].localeCompare(b[4]))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      try {
        const response = await axios.get(
          "https://sheets.googleapis.com/v4/spreadsheets/1fSWPkmCz8zNjGquFN0yIOpP_p578t0ij-RERcHxoDr0/values/baiTap?key=AIzaSyAQj26vYu-gkIeBTTiwinN3VPEYGfLQ-Y8"
        );
        console.log(response);
        setBaiTapData(response.data.values.splice(config.baiTapDataStartRow));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }} className="bg-darkBlue">
      <HashRouter>
        <Routes>
          <Route
            path={"/trangChu"}
            element={<TrangChuScreen config={config} />}
          />
          <Route
            path={"/tongQuan"}
            element={<TongQuanScreen config={config} />}
          />
          <Route
            path={"/soTay"}
            element={<SoTayScreen data={soTayData} config={config} />}
          />
          <Route
            path={`/soTay/:id`}
            element={<SoTayDetailScreen data={soTayData} config={config} />}
          />

          <Route
            path={"/baiTap"}
            element={<BaiTapScreen data={soTayData} config={config} />}
          />
          <Route path={"/video"} element={<VideoScreen config={config} />} />
          <Route
            path={"/dienDan"}
            element={<DienDanScreen config={config} />}
          />
          <Route path={"/hoTro"} element={<HoTroScreen config={config} />} />
          <Route
            path={"/baiTap/{id}"}
            element={<HoTroScreen config={config} />}
          />
          <Route path="*" element={<Navigate to={"/trangChu"} />} />
        </Routes>
      </HashRouter>

      <Footer config={config} />
    </div>
  );
}

export default Data;
