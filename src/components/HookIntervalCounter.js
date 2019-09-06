import React, { useState, useEffect } from 'react'

export default function HookIntervalCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevState => prevState + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        //clean up code
        return () => {
            clearInterval(interval)
        }
    },[count])
  return (
    <div style={{textAlign:'center'}}>
      <b>{count}</b>
    </div>
  )
}
