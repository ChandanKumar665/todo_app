import React ,{useState, useEffect} from 'react'

export default function Hook() {

    //initializing state variables;
    // here useState() will return a pair: current state value and a 
    // function that let you update it.
    // here useState() is a in-built hook.
    const [count,setCount] = useState(0);

    //declaring multiples variables
    const [age,setAge] = useState(25);
    const [fruit, setFruit] = useState('apple');
    const [todo, setTodo] = useState([{'title':'read mybook'},
                                    {'title':'gym'}]);

    // just like componentDidMount, componentDidUpdate, and componentWillUnmount                                
    
    useEffect(() => {
        document.title = 'new todo'
        console.log('1times')
    }) 

    useEffect(() => {
        // document.title = 'new todo'
        console.log('2times')
    },[count]) 
                                 
  return (
    <div className="container">
      <h3>This is react hook</h3>
      <p>You have clicked {count} times</p>
      <button onClick={()=> setCount(count+1)}>click me</button>
    </div>
  )
}
