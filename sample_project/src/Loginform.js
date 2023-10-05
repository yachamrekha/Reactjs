import React, { useState } from 'react'


const Loginform= () => {
  const [data, setData] = useState ({
    username:'',
    password:''
})

const {username, password} = data;
const handleChange =e =>{
  setData({...data,[e.target.name]:[e.target.value]})
}

const handleSubmit = e=> {
e.preventDefault();
console.log("form is submitted with data");
}
  return (
    <div>
      
    <h2>Loginform</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={handleChange}/> <br/>
        <input type="password" name="password" value={password} onChange={handleChange}/> <br/>
        <input type ="submit" name = "submit"/>
    </form>
    </div>
  )
}

export default Loginform

