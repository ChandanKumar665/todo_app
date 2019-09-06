import React, {useState} from 'react'

export default function HookObjectEg() {

    const [name, setname] = useState({firstName: '', lastName: ''});

    const changeName = (e) => {
        //object spreading
        var x = {...name};
        x.firstName = e.target.value
        setname(x)
    }
  return (
    <div>
      <input type="text" name="firstName" value = {name.firstName} 
      onChange = {e => changeName(e)}/><br></br>
      <input type="text" name="lastName" value = {name.lastName} 
         onChange = {e => setname({...name, lastName: e.target.value})}
      />
      <h3>First name is: {name.firstName}</h3>
      <h3>Last name is : {name.lastName}</h3>
    </div>
  )
}
