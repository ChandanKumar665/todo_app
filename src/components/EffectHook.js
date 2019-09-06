import React, { useState, useEffect, Component } from 'react'

export default function EffectHook() {

    //using State hook
    const [count, setCount] = useState(0);  
    const [name, setName] = useState('')
    //1. using effect hook
    // always call effect hook inside functional Component
    // this hook executes after every single render

    //2. to run effect hook condtionally we have pass an array in 2nd argument of useEffect. That arry contain the state variable
    // on which we want to check the prev and new state value. eg count

  useEffect(() => {
      console.log('updating title by hook')
      document.title = `you clicked ${count} times`;
  },[count])

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick = {() => setCount(prevState => prevState + 1)}>clicked {count} times</button>
    </div>
  )
}
