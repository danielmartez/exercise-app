// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import IndexRepetition from "./components/RepetitionExercise/Index";
import IndexDuration from "./components/DurationExercise/Index";
import IndexRunning from "./components/RunningExercise/Index";

export default function App() {
  const [showCurrent, setCurrent] = useState("Home");
  return (
    <div className="App">
      <h1>Exercise App</h1>
      <nav>
        <button
          style={{ width: "100px", height: "30px" }}
          onClick={() => setCurrent("Home")}
        >
          Home
        </button>
        <br></br>
        <br></br>
        <button onClick={() => setCurrent("Repetition")}>Repetition</button>
        <span> </span>
        <button onClick={() => setCurrent("Duration")}>Duration</button>
        <span> </span>
        <button onClick={() => setCurrent("Running")}>Running</button>
      </nav>
      <br></br>
      <br></br>
      {showCurrent === "Home" && (
        <h2>
          Welcome to the Exercise App! <br></br>
          Choose any of the three buttons at the top to get started:
          <p>Repetition</p>
          <p>Duration</p>
          <p>or Running</p>
        </h2>
      )}
      {showCurrent === "Repetition" && <IndexRepetition></IndexRepetition>}
      {showCurrent === "Duration" && <IndexDuration></IndexDuration>}
      {showCurrent === "Running" && <IndexRunning></IndexRunning>}
    </div>
  );
}
