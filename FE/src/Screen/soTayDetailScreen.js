import NavBarCpn from "../Component/navBarCpn";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";

function SoTayDetailScreen(props) {
  const location = useLocation().pathname;
  const urlList = location.split("/");
  const [searchTerm, setSearchTerm] = useState("");
  const data = props.data[urlList[4]];
  const tableData = data ? data.slice(4) : [];
  const rows = [];
  for (let i = 0; i < tableData.length; i += 4) {
    rows.push(tableData.slice(i, i + 4));
  }
  console.log(tableData);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleClick = (event) => {
    <Link to="/" />;
  };
  const Card = ({ children }) => {
    return (
      <div className="card mb-3 mx-0" onClick={handleClick}>
        <div className="card-body">
          <p className="card-text text-center">{children}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <NavBarCpn location={location} />
      <div className="mb-5 p-5"></div>
      <div className="pt-5 pb-0"></div>
      <div className="row">
        <div className="text-center fs-1">
          {data ? (
            <div>
              <div className="container row">
                <div className="fw-bold col" style={{ fontSize: "150px" }}>
                  <div className="container">{data[1]}</div>
                </div>
                <div className="fw-bold col fs-1 valign">
                  <div className="row valign">
                    <div className="border mt-5 mb-3">
                      {data[2] + " nét vẽ"}
                    </div>
                    <div className="border">{data[2] + " âm đọc"}</div>
                  </div>
                </div>
              </div>
              <div className="container-fluid fs-5 text-start">
                <table className="table table-bordered border border-black">
                  <tbody>
                    <tr className="border border-black">
                      <td className="border border-black">STT</td>
                      <td className="border border-black">Phiên âm</td>
                      <td className="border border-black">Từ loại</td>
                      <td className="border border-black">Giải thích</td>
                      <td className="border border-black">Ví dụ</td>
                    </tr>
                    {rows.map((item, index) => (
                      <tr className="border border-black">
                        <td className="border border-black">{index + 1}</td>
                        <td className="border border-black">{item[0]}</td>
                        <td className="border border-black">{item[1]}</td>
                        <td className="border border-black">{item[2]}</td>
                        <td className="border border-black">{item[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            "Loading"
          )}
        </div>
      </div>
    </div>
  );
}

export default SoTayDetailScreen;
