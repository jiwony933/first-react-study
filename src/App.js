import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "어린이 코트 추천",
  ]);
  let [날짜] = useState(["2022.02.01", "2022.02.13", "2022.02.28"]);
  let [하트, 하트추가] = useState(0);
  let [싫어요, 싫어요추가] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red" }}>blog</h4>
      </div>
      <div className="title-box">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              하트추가(하트 + 1);
            }}
          >
            💙
          </span>{" "}
          {하트}
          <span onClick={() => 싫어요추가(싫어요 + 1)}> 👎🏻</span>
          {싫어요}
        </h4>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자 코트 추천";
            글제목변경(copy);
          }}
        >
          제목 바꿔줘
        </button>
        <p>{날짜[0]}</p>
      </div>
      <div className="title-box">
        <h4>{글제목[1]}</h4>

        <p>{날짜[1]}</p>
      </div>
      <div className="title-box">
        <h4>{글제목[2]}</h4>
        <p>{날짜[2]}</p>
      </div>
    </div>
  );
}

export default App;
