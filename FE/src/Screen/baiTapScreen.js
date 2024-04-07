import React, { useState, useEffect } from "react";
import axios from "axios";

function BaiTapScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sheets.googleapis.com/v4/spreadsheets/1fSWPkmCz8zNjGquFN0yIOpP_p578t0ij-RERcHxoDr0/values/baiTap?key=AIzaSyAQj26vYu-gkIeBTTiwinN3VPEYGfLQ-Y8"
        );
        console.log(response);
        setData(response.data.values);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Google Sheets</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{row.join(" - ")}</li>
        ))}
      </ul>
    </div>
  );
}

export default BaiTapScreen;
