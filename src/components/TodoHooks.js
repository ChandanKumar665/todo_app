import React, { useState } from 'react'
import { MDBInput,MDBContainer, MDBRow, MDBCol, MDBBadge } from "mdbreact";

export default function TodoHooks() {

    // using useStet() hooks.
    const [todoList, setTodoList] = useState([]);
    const [error, setError] = useState('');
    

    const addTodo = (input) => {
        
        if(!input){
            setError('Please add item');
            return;
        } else {
            setError('');
            var newTodo = {
                title : input,
                id : Date.now(),
                isCompleted : false
            }
            const newTodoList = [...todoList, newTodo];
            setTodoList(newTodoList);

        }

    }

    const deleteTodo = (id) => {
        if(id !== null && id !== undefined){
            const newTodoList = todoList.filter(item => item.id !== id);
            setTodoList(newTodoList);
            setError('');
        }
    }

    const TodoForm = () => {
        const [textInput, setTextInput] = useState('');
        return (
            <div>
                <MDBRow className="text-label">
                    <MDBCol className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <MDBInput 
                            label="Add Item" 
                            value = {textInput}
                            onChange = {(e) => setTextInput(e.target.value)}
                        />
                        <span style={{color:'red'}}>{error}</span>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="text-label">
                    <MDBCol className="col-xl-6 col-lg-4 col-md-12 col-sm-6 col-xs-12">
                        <button className="btn btn-default" onClick = {() => addTodo(textInput)}>Add</button>  
                    </MDBCol>
                </MDBRow>
            </div>
        )
    }

    const Todo = ({todo, index}) => {
        const [isCompleted, setIsCompleted] = useState({});
        return (
               <li key={index}>
                    <label style={isCompleted}><span style={{fontWeight:'700'}}>{todo.title}</span></label>
                    <button style={{margin:'1rem'}} className="btn-primary" onClick={() => setIsCompleted({textDecoration:'line-through'})}>Completed</button> 
                    <button style={{margin:'0.5rem'}} className="btn-danger" onClick = {() => deleteTodo(todo.id)}>Delete</button>
               </li> 
        )    
    }

    return (
        <>
            <MDBContainer>
                <MDBRow className="text-label">
                    <MDBCol className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <MDBBadge color="default"><h1>Create your Todo here</h1></MDBBadge>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <ul>
                        {
                            todoList.map((todo, index) => 
                                    <Todo
                                        key = {index}
                                        index = {index}
                                        todo = {todo}   
                                    />
                            )
                        }
                    </ul>
                </MDBRow>
                <TodoForm/>
            </MDBContainer>
        </>
  )
}
