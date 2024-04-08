import React, { useState, useEffect } from "react";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
// import axios from "axios"; // Import if needed

import SoTayScreen from "../Screen/soTayScreen";
import BaiTapScreen from "../Screen/baiTapScreen";
import TrangChuScreen from "../Screen/trangChu";

function Data() {
  return (
    <>

    <HashRouter> 
      <h1>Duy Long</h1>
      <nav>
          <Link class="btn btn-primary btn-lg" to="/">Trang Chủ</Link>
          <Link class="btn btn-primary btn-lg" to="/soTay">Sổ Tay</Link>
          <Link class="btn btn-primary btn-lg" to="/baiTap">Bài Tập</Link>
        </nav>
      <Routes>
        <Route path="/soTay" element={<SoTayScreen />} />
        <Route path="/baiTap" element={<BaiTapScreen />} />
        <Route path="/" element={<TrangChuScreen />} />
      </Routes>
    </HashRouter>
    </>
  );
}

export default Data;