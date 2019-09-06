import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increament':
            return {...currentState, firstCounter: (currentState.firstCounter + action.value)}
        case 'decreament':
            return {...currentState, firstCounter: (currentState.firstCounter - action.value)}
        case 'increament2':
                return {...currentState, secondCounter: currentState.secondCounter + action.value}
        case 'decreament2':
                return {...currentState, secondCounter: (currentState.secondCounter - action.value)}    
        case 'reset':
            return initialState   
        default:
            return currentState;
    }
}

export default function ReducerHook2() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
      <div>
        Count - {count.firstCounter}<br></br>
        <button onClick = {() => dispatch({type:'increament', value:1})}>increament</button>
        <button onClick = {() => dispatch({type:'decreament', value:1})}>decreament</button>
        <button onClick = {() => dispatch({type:'reset', value:0})}>reset</button>
        <br></br>
        Count2 - {count.secondCounter}<br></br>
        <button onClick = {() => dispatch({type:'increament2', value:5})}>increament by 5</button>
        <button onClick = {() => dispatch({type:'decreament2', value:5})}>decreament by 5</button>
        <button onClick = {() => dispatch({type:'reset', value:0})}>reset2</button>
      </div>
    )
}
