import React, { Component } from 'react'
import { MDBInput,MDBContainer, MDBRow, MDBCol, MDBBadge } from "mdbreact";

export default class Todo extends Component {
    constructor(){
        super();
        this.state = {
            todoList: [],
            itemTitle: '',
            err:''
        }
    }

    changeInput = (input) => {
        if(input !== '' && input !== null){
            this.setState({
                itemTitle: input
            })
        }else{
            this.setState({
                itemTitle: ''
            })
        }
    }

    addItem = (item) => {
        if(item !== '' && item !== null){
            let itemObj = {
                id: Date.now(),
                title: item
            }
            
            let temp = this.state.todoList
            temp.push(itemObj)
            // console.log(temp)
            this.setState({
                todoList: temp,
                itemTitle: '',
                err:''
            })
        }else{
            this.setState({
                err: 'please add some item'
            })
        }
        
    }

    deleteItem = (id) => {
        if(id !== '' && id !== null){
            let temp = this.state.todoList.filter(item => item.id !== id)
            this.setState({
                todoList: temp
            })
        }
    }

  render() {
      let data = this.state.todoList
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
                    data.map(item => 
                            <li key={item.id}>
                                <label>{item.title}</label> 
                                <button style={{margin:'1rem'}} className="btn-danger" onClick={() => this.deleteItem(item.id)}>Delete</button>
                            </li>   
                    )
                }
            </ul>
        </MDBRow>
        <MDBRow className="text-label">
            <MDBCol className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <MDBInput 
                    label="Add Item" 
                    value={this.state.itemTitle} 
                    onChange={(e)=> this.changeInput(e.target.value)}
                />
                <span style={{color:'red'}}>{this.state.err}</span>
            </MDBCol>
        </MDBRow>
        <MDBRow className="text-label">
            <MDBCol className="col-xl-6 col-lg-4 col-md-12 col-sm-6 col-xs-12">
                <button className="btn btn-default" onClick={()=> this.addItem(this.state.itemTitle)}>Add</button>  
            </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
    )
  }
}
