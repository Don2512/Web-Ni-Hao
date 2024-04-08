import React, { useState, useEffect } from "react";
import "../Public/style.css";
import {
  HashRouter,Router,
  Route,
  Routes,
  useLocation,
  Redirect,
  Navigate,
} from "react-router-dom";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sheets.googleapis.com/v4/spreadsheets/1fSWPkmCz8zNjGquFN0yIOpP_p578t0ij-RERcHxoDr0/values/soTay?key=AIzaSyAQj26vYu-gkIeBTTiwinN3VPEYGfLQ-Y8"
        );
        console.log(response);
        setSoTayData(
          response.data.values
            .splice(1)
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
        setBaiTapData(response.data.values.splice(1));
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
          <Route path={"/trangChu"} element={<TrangChuScreen />} />
          <Route
            path={"/tongQuan"}
            element={<TongQuanScreen data={soTayData} />}
          />
          <Route
            path={"/soTay"}
            element={<SoTayScreen data={soTayData} />}
          />
          <Route
            path={`/soTay/:id`}
            element={<SoTayDetailScreen data={soTayData} />}
          />

          <Route
            path={"/baiTap"}
            element={<BaiTapScreen data={soTayData} />}
          />
          <Route
            path={"/video"}
            element={<VideoScreen data={soTayData} />}
          />
          <Route
            path={"/dienDan"}
            element={<DienDanScreen data={soTayData} />}
          />
          <Route
            path={"/hoTro"}
            element={<HoTroScreen data={soTayData} />}
          />
          <Route
            path={"/baiTap/{id}"}
            element={<HoTroScreen data={soTayData} />}
          />
          <Route path="*" element={<Navigate to={"/trangChu"} />} />
        </Routes>
      </HashRouter>
      
      <Footer />
    </div>
  );
}

export default Data;