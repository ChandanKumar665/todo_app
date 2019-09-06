import React, { useReducer } from 'react'

const initialState = 0
const reducer = (currentState, action) => {
    switch (action) {
        case 'increament':
            return currentState + 1
        case 'decreament':
            return currentState - 1
        case 'reset':
            return initialState    
        default:
            return currentState;
    }
}
export default function ReducerHook() {

    //defining reducer hook, that takes two parameter one callback function and initial state.
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      Count - {count}<br></br>
      <button onClick = {() => dispatch('increament')}>increament</button>
      <button onClick = {() => dispatch('decreament')}>decreament</button>
      <button onClick = {() => dispatch('reset')}>reset</button>
    </div>
  )
}
