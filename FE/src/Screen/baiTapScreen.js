import NavBarCpn from "../Component/navBarCpn";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";


function BaiTapScreen(props) {
  const [Type, setType] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [Check, setCheck] = useState(false);
  const [responses, setResponses] = useState({});
  const config = {
    ...props.config,
    location: useLocation().pathname,
    data: props.data,
    showWordHeight: window.innerWidth < 1000 ? 400 : 550,
    headerHeight: window.innerWidth < 1000 ? 170 : 100,
  };

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

  function getDataABCD(text) {
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
    return [qs, [A, B, C, D]];
  }

  function isHanCharacter(char) {
    // Biểu thức chính quy kiểm tra xem char có phải là chữ Hán hoặc dấu
    const hanAndPunctuationRegex =
      /^[\u4e00-\u9fa5，。“” ？" , ！ 、123456789 ： 》《 ·]$/;
    return hanAndPunctuationRegex.test(char);
  }

  function Onclick(type) {
    const count = 100;
    // Your logic here'
    var viewedWordList = JSON.parse(getCookie("viewedWordList"));
    var randomIndices = [];
    if (viewedWordList.length > count) {
      randomIndices = viewedWordList.slice(0, count);
      viewedWordList = viewedWordList.slice(count);
      var jsonStr = JSON.stringify(viewedWordList);
      document.cookie =
        "viewedWordList=" +
        jsonStr +
        "; expires=" +
        new Date(Date.now() + 7 * 864e5).toUTCString() +
        "; path=/";
    } else {
      randomIndices = viewedWordList;
      var myArray = [];
      var jsonStr = JSON.stringify(myArray);
      document.cookie =
        "viewedWordList=" +
        jsonStr +
        "; expires=" +
        new Date(Date.now() + 7 * 864e5).toUTCString() +
        "; path=/";
    }
    while (randomIndices.length < count) {
      const randomIndex = Math.floor(Math.random() * props.data.length + 1);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    const dataRandom = randomIndices.map((index) =>
      props.data[parseInt(index) - 1] ? props.data[parseInt(index) - 1] : 0
    );
    setType(type);
    setCheck(false);
    setResponses([]);
    setQuestions(dataRandom);
  }

  const handleInputChange = (questionId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value.trim(),
    }));
    console.log(responses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctAnswers = questions.filter(
      (q) => responses[q[0]] === q[Type * 2 + 1]
    );
    const score = correctAnswers.length;
    alert(
      `Bạn đã trả lời đúng ${score} trên tổng số ${questions.length} câu hỏi.`
    );
    setCheck(true);
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
                className="col btn btn-primary mr-10"
                onClick={() => Onclick(1)}
              >
                random Loại  1
              </button>
              <button
                type="button"
                className="col btn btn-primary mr-10"
                onClick={() => Onclick(2)}
              >
                random Loại  2
              </button>
              <button
                type="button"
                className="col btn btn-primary mr-10"
                onClick={() => Onclick(3)}
              >
                random Loại  3
              </button>
              <button
                type="button"
                className="col btn btn-primary mr-10"
                onClick={() => Onclick(4)}
              >
                random Loại  4
              </button>
            </div>
          </div>

          {Type === 1 && (
            <form onSubmit={handleSubmit}>
              {questions.map((question, index) => (

                <div key={question[0]}>
                  <div>
                    {question[Type * 2] && (

                      <div>
                          {index + 1}. {" "}
                          {question[Type * 2].split("").map((char, index) => (
                            <span
                              key={index}
                              style={
                                char === question[1] &&
                                index > 0 &&
                                (question[Type * 2][index - 1] === "(" ||
                                question[Type * 2][index - 1] === "（")
                                  ? { color: "red", fontWeight: "bold" }
                                  : { color: "inherit" }
                              }
                            >
                              {char}
                            </span>
                          ))}
                      </div>
                    )}
                  </div>

                  {Check ? (
                    <div>
                      {responses[question[0]] &&
                      responses[question[0]] === question[Type * 2 + 1] ? (
                        <input
                          style={{ backgroundColor: "#90EE90" }}
                          type="text"
                          name={`question_${question[0]}`}
                          onChange={(e) =>
                            handleInputChange(question[0], e.target.value)
                          }
                          readOnly
                        />
                      ) : (
                        <input
                          style={{ backgroundColor: "#ffcccc" }}
                          type="text"
                          name={`question_${question[0]}`}
                          // value={responses[question.id] || ''}
                          onChange={(e) =>
                            handleInputChange(question[0], e.target.value)
                          }
                          readOnly
                        />
                      )}

                      <div style={{ color: "red", fontWeight: "bold" }}>
                        Đáp án : {question[Type * 2 + 1]}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="text"
                        name={`question_${question[0]}`}
                        // value={responses[question.id] || ''}
                        onChange={(e) =>
                          handleInputChange(question[0], e.target.value)
                        }
                      />
                      <div>{question[Type * 2 + 1]} </div>
                    </div>
                  )}
                </div>



              ))}
              {!Check && <button type="submit" class="btn btn-primary btn-lg btn-block">Nộp bài</button>}
            </form>
          )}

{Type === 2 && (
  <form onSubmit={handleSubmit}>
    {questions.map((question, index) => (
      <div  style={{ marginBottom: "1em" }}> {/* Ensure the key is unique */}

        <div>
            {index + 1}. {" "}
            {getDataABCD(question[Type * 2])[0].split("").map((char, index) => (
              <span 
                style={
                  isHanCharacter(char)
                    ? { color: "inherit" }
                    : { color: "red", fontWeight: "bold" }
                }
              >
                {char}
              </span>
            ))}
        </div>

        {getDataABCD(question[Type * 2])[1].map((option, i) => (
      
      Check && responses[question[0]] && responses[question[0]] === String.fromCharCode(65 + i)
      ?
      (               
        <div
          key={index}
          style={{ display: "flex", alignItems: "center" }}
        >
            {responses[question[0]] !== question[Type * 2 + 1] ?
            (
              <div style={{  color: "red" }}>
              <div style={{ marginRight: "0.5em"}}>
                {String.fromCharCode(65 + i)}.
              </div>
                <label key={i}>
                <input
                  key={i}
                  type="radio"
                  name={`question_${question[0]}`}
                  checked={true}
                  onChange={() =>
                    handleInputChange(
                      question[0],
                      String.fromCharCode(65 + i)
                    )
                  }
                />

                  {option}
    
                </label>
              </div>

            ):
            (
              <div style={{  color: "green" }}>
              <div style={{ marginRight: "0.5em" }}>
                {String.fromCharCode(65 + i)}.
              </div>
                <label key={i}>
                <input
                  key={i}
                  type="radio"
                  name={`question_${question[0]}`}
                  checked={true}
                  onChange={() =>
                    handleInputChange(
                      question[0],
                      String.fromCharCode(65 + i)
                    )
                  }
                />

                  {option}

                </label>
              </div>

            )
            }


        </div>
      ):
      (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div style={{ marginRight: "0.5em" }}>

            {String.fromCharCode(65 + i)}.
          </div>
          <label key={i}>
            <input
              type="radio"
              name={`question_${question[0]}`}
              onChange={() =>
                handleInputChange(
                  question[0],
                  String.fromCharCode(65 + i)
                )
              }
            />
            {option}
          </label>
        </div>
      )
    ))}
      </div>
    ))}
    {!Check && <button type="submit" class="btn btn-primary btn-lg btn-block">Nộp bài</button>}
  </form>
)}
        
          {Type === 3 && (
            <form onSubmit={handleSubmit}>
              {questions.map((question, index) => (
                <div style={{ marginBottom: "1em" }}>
                  <div>
                    {index + 1}. {getDataABCD(question[Type * 2])[0]}
                  </div>
                  {getDataABCD(question[Type * 2])[1].map((option, i) => (
                    
                    Check && responses[question[0]] && responses[question[0]] === String.fromCharCode(65 + i)
                    ?
                    (               
                      <div
                        key={index}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                          {responses[question[0]] !== question[Type * 2 + 1] ?
                          (
                            <div style={{  color: "red" }}>
                            <div style={{ marginRight: "0.5em"}}>
                              {String.fromCharCode(65 + i)}.
                            </div>
                              <label key={i}>
                              <input
                                key={i}
                                type="radio"
                                name={`question_${question[0]}`}
                                checked={true}
                                onChange={() =>
                                  handleInputChange(
                                    question[0],
                                    String.fromCharCode(65 + i)
                                  )
                                }
                              />
             
                                {option}
                  
                              </label>
                            </div>
  
                          ):
                          (
                            <div style={{  color: "green" }}>
                            <div style={{ marginRight: "0.5em" }}>
                              {String.fromCharCode(65 + i)}.
                            </div>
                              <label key={i}>
                              <input
                                key={i}
                                type="radio"
                                name={`question_${question[0]}`}
                                checked={true}
                                onChange={() =>
                                  handleInputChange(
                                    question[0],
                                    String.fromCharCode(65 + i)
                                  )
                                }
                              />
              
                                {option}
            
                              </label>
                            </div>
  
                          )
                          }


                      </div>
                    ):
                    (
                      <div
                        key={index}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div style={{ marginRight: "0.5em" }}>

                          {String.fromCharCode(65 + i)}.
                        </div>
                        <label>
                          <input
                            type="radio"
                            name={`question_${question[0]}`}
                            onChange={() =>
                              handleInputChange(
                                question[0],
                                String.fromCharCode(65 + i)
                              )
                            }
                          />
                          {option}
                        </label>
                      </div>
                    )
                  ))}
                </div>
              ))}
              {!Check && <button type="submit" class="btn btn-primary btn-lg btn-block">Nộp bài</button>}
            </form>
          )}

          {Type === 4 && (
            <form onSubmit={handleSubmit}>
              {questions.map((question, index) => (
                <div key={question[0]}>
                  <div>
                      {index + 1}. {" "}
                      {question[Type * 2].split("").map((char, index) => (
                        <span
                          key={index}
                          style={
                            isHanCharacter(char)
                              ? { color: "inherit" }
                              : { color: "red", fontWeight: "bold" }
                          }
                        >
                          {char}
                        </span>
                      ))}
                  </div>

                  {Check ? (
                    <div>
                      {responses[question[0]] &&
                      responses[question[0]] === question[Type * 2 + 1] ? (
                        <input
                          style={{ backgroundColor: "#90EE90" }}
                          type="text"
                          name={`question_${question[0]}`}
                          onChange={(e) =>
                            handleInputChange(question[0], e.target.value)
                          }
                          readOnly
                        />
                      ) : (
                        <input
                          style={{ backgroundColor: "#ffcccc" }}
                          type="text"
                          name={`question_${question[0]}`}
                          // value={responses[question.id] || ''}
                          onChange={(e) =>
                            handleInputChange(question[0], e.target.value)
                          }
                          readOnly
                        />
                      )}

                      <div style={{ color: "red", fontWeight: "bold" }}>
                        Đáp án : {question[Type * 2 + 1]}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="text"
                        name={`question_${question[0]}`}
                        // value={responses[question.id] || ''}
                        onChange={(e) =>
                          handleInputChange(question[0], e.target.value)
                        }
                      />
                      <div>{question[Type * 2 + 1]} </div>
                    </div>
                  )}
                </div>
              ))}
              {!Check && <button type="submit" class="btn btn-primary btn-lg btn-block">Nộp bài</button>}
            </form>
          )}


          </div>
      </div>
    </>
  );
}

export default BaiTapScreen;
