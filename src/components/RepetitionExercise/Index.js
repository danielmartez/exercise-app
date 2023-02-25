import React, { useState } from 'react'

export default function IndexRepetition() {
  const exerciseName = ["Push Ups", "Jumping Jacks"]

  const [count, setCount] = useState(0)
  function increaseRep() {
    setCount(count + 1)
  }
  function resetRep () {
    setCount(0)
  }

  const [jjackCount, jjackSet] = useState(0)
  function jjackRep() {
    jjackSet(jjackCount + 1)
  }
  function jjackReset () {
    jjackSet(0)
  }

  return (
    <div>
        <h1>Repetition</h1>

        <h2>{exerciseName[0]}</h2>
        <h3>Reps: {count}</h3>
        <button onClick={increaseRep}>Complete Rep</button>
        <span>  </span>
        <button onClick = {resetRep}>Reset</button>

        <h2>{exerciseName[1]}</h2>
        <h3>Reps: {jjackCount}</h3>
        <button onClick={jjackRep}>Complete Rep</button>
        <span>  </span>
        <button onClick = {jjackReset}>Reset</button>
    </div>
  )
}