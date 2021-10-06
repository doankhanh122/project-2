import React, { useState } from "react";
var ChuSo = [
  " không ",
  " một ",
  " hai ",
  " ba ",
  " bốn ",
  " năm ",
  " sáu ",
  " bảy ",
  " tám ",
  " chín ",
];

export function DocSo3ChuSo(baso) {
  var tram;
  var chuc;
  var donvi;
  var KetQua = "";
  tram = parseInt(baso / 100);
  chuc = parseInt((baso % 100) / 10);
  donvi = baso % 10;
  if (tram === 0 && chuc === 0 && donvi === 0) return "";
  if (tram !== 0) {
    KetQua += ChuSo[tram] + " trăm ";
    if (chuc === 0 && donvi !== 0) KetQua += " linh ";
  }
  if (chuc !== 0 && chuc !== 1) {
    KetQua += ChuSo[chuc] + " mươi";
    if (chuc === 0 && donvi !== 0) KetQua = KetQua + " linh ";
  }
  if (chuc === 1) KetQua += " mười ";
  switch (donvi) {
    case 1:
      if (chuc !== 0 && chuc !== 1) {
        KetQua += " mốt ";
      } else {
        KetQua += ChuSo[donvi];
      }
      break;
    case 5:
      if (chuc === 0) {
        KetQua += ChuSo[donvi];
      } else {
        KetQua += " lăm ";
      }
      break;
    default:
      if (donvi !== 0) {
        KetQua += ChuSo[donvi];
      }
      break;
  }

  KetQua = KetQua.replace(/\s{2,}/g, " ").trim();
  return KetQua;
}

const CalculateForm = (props) => {
  const [inputValue, setInputValue] = useState("");

  const inputValueChangeHandler = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const convertNumber = () => {
    const number = parseInt(inputValue);

    console.log(DocSo3ChuSo(number));

    props.getResult(DocSo3ChuSo(number));
  };
  return (
    <>
      <input onChange={inputValueChangeHandler}></input>
      <br></br>
      <br></br>
      <button onClick={convertNumber}>Chuyển số thành chữ</button>
    </>
  );
};

export default CalculateForm;
