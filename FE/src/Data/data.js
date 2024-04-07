import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import SoTayScreen from "../Screen/soTayScreen";
import BaiTapScreen from "../Screen/baiTapScreen";
import TrangChuScreen from "../Screen/trangChu";
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
    <Router>
      <Routes>
        <Route path={baseURL + "/soTay"} element={<SoTayScreen />} />
        <Route path="/baiTap" element={BaiTapScreen} />
        <Route path="/" element={TrangChuScreen} />
      </Routes>
    </Router>
  );
}

export default Data;
