import NavBarCpn from "../Component/navBarCpn";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";


function CauBaiTap1Screen({text, charToHighlight })
{
  return (
    <div>
      {charToHighlight.split('').map((char, index) => ( 
      <span key={index} style={ (char === text && index > 0 && (charToHighlight[index-1] === '(' || charToHighlight[index-1] === '（')) ? {color: 'red', fontWeight: 'bold'} : {color: 'inherit'} }>
        {char}
      </span>
      ))}
    </div>
  );
}


function CauBaiTap2Screen({text})
{
  function isHanCharacter(char) {
    // Biểu thức chính quy kiểm tra xem char có phải là chữ Hán hoặc dấu
    const hanAndPunctuationRegex =  /^[\u4e00-\u9fa5，。“” ？" , ！ 、123456789]$/;
    return hanAndPunctuationRegex.test(char);
  } 
  const words = text.split("A.");
  const qs =  words[0];

  const words1 = words[1].split("B.");
  const A =  words1[0];  

  const words2 = words1[1].split("C.");
  const B =  words2[0];  

  const words3 = words2[1].split("D.");
  const C =  words3[0]; 

  const words4 = words3[1];
  const D =  words4; 

  return (
    <div>
      {qs.split('').map((char, index) => ( 
      <span key={index} style={ (isHanCharacter(char)) ? {color: 'inherit'} : {color: 'red', fontWeight: 'bold'}  }>
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



function CauBaiTap3Screen({text})
{
  const words = text.split("A.");
  const qs =  words[0];

  const words1 = words[1].split("B.");
  const A =  words1[0];  

  const words2 = words1[1].split("C.");
  const B =  words2[0];  

  const words3 = words2[1].split("D.");
  const C =  words3[0]; 

  const words4 = words3[1];
  const D =  words4; 

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


function CauBaiTap4Screen({text })
{
  function isHanCharacter(char) {
    // Biểu thức chính quy kiểm tra xem char có phải là chữ Hán hoặc dấu
    const hanAndPunctuationRegex = /^[\u4e00-\u9fa5，。“” ？" , ！ 、123456789]$/;
    return hanAndPunctuationRegex.test(char);
  } 
  return (
    <div>
      {text.split('').map((char, index) => ( 
      <span key={index} style={ (isHanCharacter(char)) ? {color: 'inherit'} : {color: 'red', fontWeight: 'bold'}  }>
        {char}
      </span>
      ))}
    </div>
  );
}

function BaiTapScreen(props) {
  const Type = props.type;
  /*
   * result[0] : ID
   * result[1] : name
   * result[2] : KQ
   * result[3] : DA
   * result[4] : True/Flase
  */
  const result = props.result;
  const count = props.count;

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

        </div>
      </div>

      {(Type === 1) && (
          <div>
          {result.map((item, index) => (
            <React.Fragment key={index}>
              {index + 1}. {item[Type * 2] && <CauBaiTap1Screen text={item[1]} charToHighlight={item[Type * 2]} />}
              <p style={{color: 'red', fontWeight: 'bold'}}>{item[2]}</p>
            </React.Fragment>
          ))}
        </div>
      )}

    {
      (Type === 2) && (
            <div>
          {DataRandom.map((item, index) => (
            <React.Fragment key={index}>
              {index + 1}. {item[Type * 2] && <CauBaiTap2Screen text={item[Type * 2]} />}
              <p style={{color: 'red', fontWeight: 'bold'}}>{item[1]}: _______</p>
            </React.Fragment>
          ))}
          </div>    
      )
    }  



    {
      (Type === 3) && (
        <div>
          {DataRandom.map((item, index) => (
            <React.Fragment key={index}>
              {index + 1}. {item[Type * 2] && <CauBaiTap3Screen text={item[Type * 2]} />}
              <p style={{color: 'red', fontWeight: 'bold'}}>{item[1]}: _______</p>
            </React.Fragment>
          ))}

        </div>
      )
    }  

    {
      (Type === 4) && (
            <div>
            
            {DataRandom.map((item, index) => (
            <React.Fragment key={index}>
              {index + 1}. {item[Type * 2] && <CauBaiTap4Screen text={item[Type * 2]} />}
              <p style={{color: 'red', fontWeight: 'bold'}}>{item[1]}: _______</p>
            </React.Fragment>
          ))}

          </div>    
      )
    }  


    </div>
    </>
  );
}

export default BaiTapScreen;
