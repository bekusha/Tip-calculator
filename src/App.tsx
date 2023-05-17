import React, { useEffect, useState } from "react";
import dollar from "./images/$.svg";
import person from "./images/Group 8.svg";
import splitter from "./images/SPLITTER.png";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  const reset = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
    setTipAmount(0);
    setTip(0);
  };

  useEffect(() => {
    if (bill > 0 && people > 0 && tip > 0) {
      setTipAmount(tip / people);
    }
  }, [tip, bill, people]);
  return (
    <>
      <div className="header">
        <img src={splitter} alt="" />
      </div>
      <div className="App">
        <div className="left">
          <div className="billInput">
            Bill
            <div className="inputContainer">
              <img className="dollar" src={dollar} alt="" />
              <input
                placeholder="0"
                className="bill"
                onChange={(e) => {
                  setBill(e.target.valueAsNumber);
                }}
                type="number"
              />
            </div>
          </div>
          <div className="selectTip">Select Tip %</div>
          <div className="buttons">
            <button
              className="percentButton"
              onClick={() => {
                setTip((5 / 100) * bill);
              }}
            >
              5%
            </button>
            <button
              className="percentButton"
              onClick={() => {
                setTip((10 / 100) * bill);
              }}
            >
              10%
            </button>
            <button
              className="percentButton"
              onClick={() => {
                setTip((15 / 100) * bill);
              }}
            >
              15%
            </button>
            <button
              className="percentButton"
              onClick={() => {
                setTip((25 / 100) * bill);
              }}
            >
              25%
            </button>
            <button
              className="percentButton"
              onClick={() => {
                setTip((50 / 100) * bill);
              }}
            >
              50%
            </button>
            <button
              className="percentButton"
              onClick={() => {
                setTip((60 / 100) * bill);
              }}
            >
              60%
            </button>
          </div>
          Number of People
          <div className="inputContainer">
            <img className="personIcon" src={person} alt="" />
            <input
              className="belowInput"
              onChange={(e) => {
                setPeople(e.target.valueAsNumber);
              }}
              placeholder="0"
              type="number"
            />
          </div>
        </div>
        <div className="result">
          <div className="tipContainer">
            <div className="avoidFlex">
              {" "}
              Tip amount <br />
              <span className="smallFont">/ person</span>
            </div>
            <div className="tip">{tipAmount}$</div>
          </div>
          <div className="totalContainer">
            <div className="avoidFlex">
              Total <br />
              <span className="smallFont">/ person</span>
            </div>{" "}
            <div className="person">{tip}$</div>
          </div>
          <button onClick={reset} className="reset">
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
