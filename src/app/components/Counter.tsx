'use client'

import { useState } from "react"

export function Counter() {

  const [counter, setCounter] = useState<number>(0)

  function handleIncrementCounter() {
    setCounter(state => state + 1)
  }

  return (
    <div>

      <p>Counter: {counter}</p>

      <button onClick={handleIncrementCounter}>Increment counter</button>

    </div>
  )
}