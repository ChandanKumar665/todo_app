import React, { useState, useEffect } from 'react'

export default function MouseHook() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMouseMove = e => {
        console.log('log mouse event called')
        setX(e.clientX)
        setY(e.clientY)
    }
    //  1. if we want to run effect hook only once at first render then we have to pass an empty array as 2nd args. telling
    // react that effect hook does not dpend on any other state or props.

    // 2. don't forget to write clean up code in effect hook. for that just return a function with clean up activity
    useEffect(() => {
        console.log('use effect called')

        //adding an event listener
        window.addEventListener('mousemove', logMouseMove)

        //return clean up function
        return () => {
            window.removeEventListener('mousemove', logMouseMove);
        }
    },[])

  return (
    <div>
      X is at {x} <br></br>
      Y is at {y}
    </div>
  )
}
