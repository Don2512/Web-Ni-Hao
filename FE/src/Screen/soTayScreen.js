import React, { useState, useEffect } from "react";
import axios from "axios";

function SoTayScreen() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showTopLayer, setShowTopLayer] = useState(false);
  const [showing, setShowing] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleClick = (event) => {
    setShowTopLayer(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sheets.googleapis.com/v4/spreadsheets/1fSWPkmCz8zNjGquFN0yIOpP_p578t0ij-RERcHxoDr0/values/soTay?key=AIzaSyAQj26vYu-gkIeBTTiwinN3VPEYGfLQ-Y8"
        );
        console.log(response);
        setData(
          response.data.values
            .splice(1)
            .sort((a, b) => a[4].localeCompare(b[4]))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const Card = ({ children }) => {
    return (
      <div className="card mb-3 mx-1" onClick={handleClick}>
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
      {showTopLayer && <div className="h-100 w-100">DatNguyen</div>}
      <div className="container mt-3" style={{ width: "100vw" }}>
        <div className="text-center">
          {/* <div className="border "> */}
          <input
            type="text"
            className="form-control shadow-sm p-3 mb-5 bg-white rounded"
            placeholder="Nhập từ cần tìm"
            onChange={handleSearch}
          />
          {/* </div> */}
        </div>
      </div>

      <div className="row mx-3 col-12">
        {filteredData.map((row, index) => (
          <div className="col-sm-4 col-md-2 col-lg-1" key={index}>
            <Card>{row[1]}</Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoTayScreen;
