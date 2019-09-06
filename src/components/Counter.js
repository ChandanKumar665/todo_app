import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)
    const [btntext, setBtnText] = useState('Start')
    const [interval, setMyInterval] = useState('')

    const inc = () => {
        setCount(prevState => prevState + 1)
    }

    const startStop = () => {

        if(btntext === 'Start'){
            setMyInterval(setInterval(inc,1000))
            setBtnText('Stop')
        }else {
            clearInterval(interval)
            setBtnText('Start')
        }
    }

    const reset = () => {
        setCount(0)
        clearInterval(interval)
        setBtnText('Start')
    }

  return (
    <div style={{textAlign:'center'}}>
        <strong>{count}</strong><br></br>
      <button onClick = {startStop}>{btntext}</button>
      <button onClick = {reset}>Reset</button>
    </div>
  )
}
