import NavBarCpn from "../Component/navBarCpn";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";

function CauBaiTap1Screen({ text, charToHighlight }) {
  return (
    <div>
      {charToHighlight.split("").map((char, index) => (
        <span
          key={index}
          style={
            char === text &&
            index > 0 &&
            (charToHighlight[index - 1] === "(" ||
              charToHighlight[index - 1] === "（")
              ? { color: "red", fontWeight: "bold" }
              : { color: "inherit" }
          }>
          {char}
        </span>
      ))}
    </div>
  );
}

function CauBaiTap2Screen({ text }) {
  function isHanCharacter(char) {
    // Biểu thức chính quy kiểm tra xem char có phải là chữ Hán hoặc dấu
    const hanAndPunctuationRegex = /^[\u4e00-\u9fa5，。“” ？]$/;
    return hanAndPunctuationRegex.test(char);
  }
  const words = text.split("A.");
  const qs = words[0];

  const words1 = words[1].split("B.");
  const A = words1[0];

  const words2 = words1[1].split("C.");
  const B = words2[0];

  const words3 = words2[1].split("D.");
  const C = words3[0];

  const words4 = words3[1];
  const D = words4;

  return (
    <div>
      {qs.split("").map((char, index) => (
        <span
          key={index}
          style={
            isHanCharacter(char)
              ? { color: "inherit" }
              : { color: "red", fontWeight: "bold" }
          }>
          {char}
        </span>
      ))}
      <p>A. {A}</p>
      <p>B. {B}</p>
      <p>C. {C}</p>
      <p>D. {D}</p>
    </div>
  );
}

function CauBaiTap3Screen({ text }) {
  const words = text.split("A.");
  const qs = words[0];

  const words1 = words[1].split("B.");
  const A = words1[0];

  const words2 = words1[1].split("C.");
  const B = words2[0];

  const words3 = words2[1].split("D.");
  const C = words3[0];

  const words4 = words3[1];
  const D = words4;

  return (
    <div>
      <p>{qs}</p>
      <p>A. {A}</p>
      <p>B. {B}</p>
      <p>C. {C}</p>
      <p>D. {D}</p>
    </div>
  );
}

function CauBaiTap4Screen({ text }) {
  function isHanCharacter(char) {
    // Biểu thức chính quy kiểm tra xem char có phải là chữ Hán hoặc dấu
    const hanAndPunctuationRegex = /^[\u4e00-\u9fa5，。“” ？" , ！ 、]$/;
    return hanAndPunctuationRegex.test(char);
  }
  return (
    <div>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={
            isHanCharacter(char)
              ? { color: "inherit" }
              : { color: "red", fontWeight: "bold" }
          }>
          {char}
        </span>
      ))}
    </div>
  );
}

function BaiTapScreen(props) {
  const location = useLocation().pathname;
  const [Type, setType] = useState(0);
  const [DataRandom, setDataRandom] = useState([]);

  function getCookie(name) {
    let cookieArray = document.cookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookiePair = cookieArray[i].split("=");
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }

  function Onclick(type) {
    // Your logic here'
    var viewedWordList = JSON.parse(getCookie("viewedWordList"));
    var randomIndices = [];
    if (viewedWordList.length > 10) {
      randomIndices = viewedWordList.slice(0, 10);
    } else {
      randomIndices = viewedWordList;
    }
    console.log(randomIndices);
    while (randomIndices.length < 20) {
      const randomIndex = Math.floor(Math.random() * props.data.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    console.log(randomIndices);

    const dataRandom = randomIndices.map((index) =>
      props.data[parseInt(index) - 1] ? props.data[parseInt(index) - 1] : 0
    );
    setType(type);
    setDataRandom(dataRandom);
  }
  const config = {
    ...props.config,
    location: useLocation().pathname,
    data: props.data,
    showWordHeight: window.innerWidth < 1000 ? 400 : 550,
    headerHeight: window.innerWidth < 1000 ? 170 : 100,
  };

  return (
    <>
      <div className="bg-white">
        <NavBarCpn config={config} />
        <div className="mb-5 p-5"></div>
        <div className="pt-2 pb-0"></div>
        <div className="fluid-container mt-3 mx-4 px-3 mt-5">
          <div className="text-center row">
            <div style={{ fontSize: "70px" }}>
              <div style={{ fontWeight: 700 }}>BÀI TẬP</div>
            </div>
            <div className="container">
              <button
                type="button"
                className="col btn btn-primary"
                onClick={() => Onclick(1)}>
                Loại 1
              </button>
              <button
                type="button"
                className="col btn btn-primary"
                onClick={() => Onclick(2)}>
                Loại 2
              </button>
              <button
                type="button"
                className="col btn btn-primary"
                onClick={() => Onclick(3)}>
                Loại 3
              </button>
              <button
                type="button"
                className="col btn btn-primary"
                onClick={() => Onclick(4)}>
                Loại 4
              </button>
            </div>
          </div>
        </div>

        {Type === 1 && (
          <div>
            {DataRandom.map((item, index) => (
              <React.Fragment key={index}>
                {index + 1}.{" "}
                {item[Type * 2] && (
                  <CauBaiTap1Screen
                    text={item[1]}
                    charToHighlight={item[Type * 2]}
                  />
                )}
                <p style={{ color: "red", fontWeight: "bold" }}>
                  {item[0]}: _______
                </p>
              </React.Fragment>
            ))}
          </div>
        )}

        {Type === 2 && (
          <div>
            {DataRandom.map((item, index) => (
              <React.Fragment key={index}>
                {index + 1}.{" "}
                {item[Type * 2] && <CauBaiTap2Screen text={item[Type * 2]} />}
                <p style={{ color: "red", fontWeight: "bold" }}>
                  {item[1]}: _______
                </p>
              </React.Fragment>
            ))}
          </div>
        )}

        {Type === 3 && (
          <div>
            {DataRandom.map((item, index) => (
              <React.Fragment key={index}>
                {index + 1}.{" "}
                {item[Type * 2] && <CauBaiTap3Screen text={item[Type * 2]} />}
                <p style={{ color: "red", fontWeight: "bold" }}>
                  {item[1]}: _______
                </p>
              </React.Fragment>
            ))}
          </div>
        )}

        {Type === 4 && (
          <div>
            {DataRandom.map((item, index) => (
              <React.Fragment key={index}>
                {index + 1}.{" "}
                {item[Type * 2] && <CauBaiTap4Screen text={item[Type * 2]} />}
                <p style={{ color: "red", fontWeight: "bold" }}>
                  {item[1]}: _______
                </p>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default BaiTapScreen;
