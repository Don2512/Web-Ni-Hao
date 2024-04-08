import React, { useState, useEffect } from "react";
import "../Public/style.css";
import {
  BrowserRouter as Router,
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
  const baseURL = "/Don2512/Web-Ni-Hao";
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
            .sort((a, b) => a[4].localeCompare(b[4]))
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
      <Router>
        <Routes>
          <Route path={baseURL + "/trangChu"} element={<TrangChuScreen />} />
          <Route
            path={baseURL + "/tongQuan"}
            element={<TongQuanScreen data={soTayData} />}
          />
          <Route
            path={baseURL + "/soTay"}
            element={<SoTayScreen data={soTayData} />}
          />
          <Route
            path={`${baseURL}/soTay/:id`}
            element={<SoTayDetailScreen data={soTayData} />}
          />

          <Route
            path={baseURL + "/baiTap"}
            element={<BaiTapScreen data={soTayData} />}
          />
          <Route
            path={baseURL + "/video"}
            element={<VideoScreen data={soTayData} />}
          />
          <Route
            path={baseURL + "/dienDan"}
            element={<DienDanScreen data={soTayData} />}
          />
          <Route
            path={baseURL + "/hoTro"}
            element={<HoTroScreen data={soTayData} />}
          />
          <Route
            path={baseURL + "/baiTap/{id}"}
            element={<HoTroScreen data={soTayData} />}
          />
          {/* <Route path="*" element={<Navigate to={baseURL + "/trangChu"} />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default Data;
