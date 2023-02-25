import React, { useState, useEffect } from 'react'

export default function IndexDuration() {
  const [currentTime, setTime] = useState(0)
  const [start, setStart] = useState(false)

  const theExercise = "Biking"

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

  return (
    <div>
      <h1>Duration</h1>
      <h2>{theExercise}</h2>
      <span>{(("0" + Math.floor(currentTime / 60000) % 60)).slice(-2)}:</span>
      <span>{(("0" + Math.floor(currentTime / 1000) % 60)).slice(-2)}:</span>
      <span>{(("0" + (currentTime / 10) % 100)).slice(-2)}</span>
    <br></br><br></br>
      <button onClick={() => setStart(true)}>Start</button>
      <span>  </span>
      <button onClick={() => setStart(false)}>Stop</button>
      <span>  </span>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  )
}
