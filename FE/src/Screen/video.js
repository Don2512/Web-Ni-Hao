import NavBarCpn from "../Component/navBarCpn";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";

function VideoScreen(props) {
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
    <div>
      <NavBarCpn location={location} />

      <div className="fluid-container mt-3 mx-4 px-3 mt-5">
        <div className="text-center row">
          {/* <div className="border "> */}
          <input
            type="text"
            className="shadow-sm p-3 mb-5 bg-white rounded col-lg-8 col-md-8 col-sm-12"
            placeholder="Nhập từ cần tìm"
            onChange={handleSearch}
          />
          {/* </div> */}
        </div>
      </div>

      <div className="row px-2 mx-0 col-12">
        {filteredData.map((row, index) => (
          <div
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
            key={index}>
            <Card>{row[1]}</Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoScreen;
