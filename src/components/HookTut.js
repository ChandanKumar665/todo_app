import React, {useState} from 'react'

function HookTut() {

    const [count, setCount] = useState(0);
    const incBy5 = () => {
        for(let i=0;i<5;i++){
            setCount(prevState => prevState + 1)
        }
    }
  return (
    <div>
      <label>count: {count}</label>  
      {/* not a proper way */}
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <br></br>
      <br></br>
      {/* proper way */}
      <button onClick={() => setCount(prevState => prevState + 1)}>Increament</button>
      <button onClick={() => setCount(prevState => prevState - 1)}>Decreament</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={incBy5}>Increament by 5</button>
    </div>
  )
}

export default HookTut
