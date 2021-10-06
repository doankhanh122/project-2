import React, { useState } from "react";
import "./App.css";
import CalculateForm from "./components/Form/CalculateForm";
import Result from "./components/Result/Result";

function App() {
  const [res, setRes] = useState("");

  const getResultHandler = (res) => {
    setRes(res);
  };

  return (
    <div className="App">
      <CalculateForm getResult={getResultHandler} />
      <Result ketqua={res} />
    </div>
  );
}

export default App;
