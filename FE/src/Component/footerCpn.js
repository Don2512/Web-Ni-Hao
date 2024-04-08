import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const NavBarCpn = (props) => {
  const banQuyenList = [
    { name: "nội dung abc" },
    { name: "nội dung abc" },
    { name: "nội dung abc" },
    { name: "nội dung abc" },
    { name: "nội dung abc" },
    { name: "nội dung abc" },
  ];
  const lienHeList = [
    { name: "nội dung abc", link: "linkabc" },
    { name: "nội dung abc", link: "linkabc" },
    { name: "nội dung abc", link: "linkabc" },
    { name: "nội dung abc", link: "linkabc" },
    { name: "nội dung abc", link: "linkabc" },
    { name: "nội dung abc", link: "linkabc" },
  ];
  const page = props.page;
  return (
    <div className="header bg-darkBlue p-3 pt-5 pb-4">
      <div className="header-container row">
        <div className="col text-center">
          <div className="text-white fw-bold fs-3">Bản quyền</div>
          {banQuyenList.map((item, index) => (
            <div key={index} className="nav-item text-white">
              {item.name}
            </div>
          ))}
        </div>
        <div className="col text-center">
          <div className="text-white fw-bold fs-3">Liên hệ</div>
          {lienHeList.map((item, index) => (
            <div key={index} className="nav-item text-white">
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavBarCpn;
