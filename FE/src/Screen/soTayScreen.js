import NavBarCpn from "../Component/navBarCpn";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";

function SoTayScreen(props) {
  const location = useLocation().pathname;
  const urlList = location.split("/");
  // console.log(urlList[3]);
  const [searchTerm, setSearchTerm] = useState("");
  const data = props.data;
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
  const filteredData = data.filter((row) =>
    row[1].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white">
      <NavBarCpn location={location} />
      <div className="mb-5 p-5"></div>
      <div className="pt-2 pb-0"></div>
      <div className="fluid-container mt-3 mx-4 px-3 mt-5">
        <div className="text-center row">
          <div style={{ fontSize: "70px" }}>
            <div style={{ fontWeight: 700 }}>DUOYIN</div>
          </div>
          {/* <div className="border "> */}
          <input
            type="text"
            className="shadow-sm p-3 mb-5 bg-white rounded col-lg-8 col-md-8 col-sm-12"
            placeholder="Nhập từ cần tìm"
            style={{
              transform: "translate(-50%,0)",
              position: "relative",
              left: "50%",
            }}
            onChange={handleSearch}
          />
          {/* </div> */}
        </div>
      </div>

      <div
        className="row px-2 mx-0 col-12 
        justify-content-between overflow-auto"
        style={{ maxHeight: "400px" }}>
        {filteredData.map((row, index) => (
          <Link
            to={location + "/" + index}
            className="
            col-md-2 
            col-lg-1 
            col-sm-3
            hover-bold 
            hover-bigger 
            hover-mouse
            lh-20
            valign
            px-1"
            style={{ maxWidth: "180px" }}
            key={index}>
            <Card>{row[1]}</Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SoTayScreen;
