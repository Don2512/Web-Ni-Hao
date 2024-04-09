import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const NavBarCpn = (props) => {
  const config = {
    ...props.config,
    baseFooterFontSize: window.innerWidth < 1000 ? "14px" : "20px",
    titleFooterFontSize: window.innerWidth < 1000 ? "17px" : "25px",
  };
  const banQuyenList = [
    { name: "Giáo viên hướng dẫn: ThS Đoàn Thị Thanh Nhàn" },
    {
      name: 'Bản quyền thuộc về nhóm sinh viên nghiên cứu đề tài "Từ nghiên cứu về thực trạng sử dụng chữ Hán đa âm của sinh viên khoa Tiếng Trung định hướng xây dựng hệ thống ngữ liệu trực tuyến tích hợp sổ tay từ vựng trực tuyến và bài tập vận dụng chữ Hán đa âm"',
    },
    { name: "Khoa Tiếng Trung Trường Đại học Sư phạm Thành phố Hồ Chí Minh" },
    {
      name: "Website được xây dựng và phát triển bởi các sinh viên Đại học Bách Khoa Thành phố Hồ Chí Minh",
    },
  ];
  const lienHeList = [
    {
      name: "Mail: duoyinzi99@gmail.com",
      link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=duoyinzi99@gmail.com",
    },
    {
      name: "Fanpage",
      link: "https://www.facebook.com/profile.php?id=61557907629340&mibextid=ZbWKwL",
    },
    {
      name: "Nguyễn Thị Tố An",
      link: "https://www.facebook.com/yenthao.le.568?mibextid=ZbWKwL",
    },
    {
      name: "Nguyễn Thị Thanh Trúc",
      link: "https://www.facebook.com/profile.php?id=100039659493658&mibextid=ZbWKwL",
    },
    {
      name: "Lư Gia Linh",
      link: "https://www.facebook.com/profile.php?id=100009231105099&mibextid=ZbWKwL",
    },
    {
      name: "Huỳnh Bửu Dinh",
      link: "https://www.facebook.com/profile.php?id=100008694720940&mibextid=ZbWKwL",
    },
    {
      name: "Tào Tuyết Linh",
      link: "https://www.facebook.com/profile.php?id=100015186769118&mibextid=ZbWKwL",
    },
  ];
  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="header bg-darkBlue p-3 pt-5 pb-4">
      <div className="header-container row">
        <div className="col-lg-6 col-12">
          <div
            className="row justify-content-center"
            style={{ textAlign: "justify" }}>
            <div className="col-lg-10">
              <div
                className="text-white fw-bold"
                style={{ fontSize: config.titleFooterFontSize }}>
                Bản quyền
              </div>
              {banQuyenList.map((item, index) => (
                <div
                  key={index}
                  className="nav-item text-white mb-1"
                  style={{ fontSize: config.baseFooterFontSize }}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div
            className="row justify-content-center"
            style={{ textAlign: "justify" }}>
            <div className="col-lg-10">
              <div
                className="text-white fw-bold"
                style={{ fontSize: config.titleFooterFontSize }}>
                Liên hệ
              </div>
              {lienHeList.map((item, index) => (
                <div
                  onClick={() => handleClick(item.link)}
                  key={index}
                  className="nav-item text-white mb-1 hover-mouse"
                  style={{ fontSize: config.baseFooterFontSize }}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBarCpn;
