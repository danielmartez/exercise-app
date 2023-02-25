import React, { useState, useEffect } from 'react'

export default function IndexDuration() {
  const [currentTime, setTime] = useState(0)
  const [start, setStart] = useState(false)

  const theExercise = "Running"

  useEffect(() => {
    let theInterval = null;
    if (start) {
    theInterval = setInterval(() => {
      setTime(prevTime => prevTime + 10)
    }, 10)
    } else {
      clearInterval(theInterval)
    }
    return () => clearInterval(theInterval)
  }, [start])

  const lapArray = []
  const getMinutes = (("0" + Math.floor(currentTime / 60000) % 60)).slice(-2)
  const getSeconds = (("0" + Math.floor(currentTime / 1000) % 60)).slice(-2)
  const getMilliseconds = (("0" + (currentTime / 10) % 100)).slice(-2)
  const createLap = getMinutes + " : " + getSeconds + " : " + getMilliseconds
  const lapList = document.getElementById("lapList")
  const lapListElement = document.createElement("li")
  const addLap = document.createTextNode(createLap)

  return (
    <div>
      <h1>{theExercise}</h1>
      <span id="minutes">{(("0" + Math.floor(currentTime / 60000) % 60)).slice(-2)}:</span>
      <span id="seconds">{(("0" + Math.floor(currentTime / 1000) % 60)).slice(-2)}:</span>
      <span id="milliseconds">{(("0" + (currentTime / 10) % 100)).slice(-2)}</span>
    <br></br><br></br>
      <button onClick={() => setStart(true)}>Start</button>
      <span>  </span>
      <button onClick={() => setStart(false)}>Stop</button>
      <span>  </span>
      <button onClick={() => setTime(0)}>Reset</button>
      <span>  </span>
      <button onClick={() => {lapArray.push(createLap); console.log(lapArray); lapListElement.appendChild(addLap); lapList.appendChild(lapListElement)}}>Lap</button>
      <br></br>
      <h2>Laps</h2>
      <ul 
      style={{ listStyleType: "none", padding: "0" }}
      id="lapList">
      </ul>
    </div>
  )
}
