import React , {useState} from 'react'

const Registrationform=()=> { 
    const [data, setData] = useState ({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        Phonenumber:''
    });
    
    const {firstname, lastname,email,password,Phonenumber} = data;

    const handleChange =e =>{
      setData({...data,[e.target.name]:[e.target.value]})
    }
    
    const handleSubmit = e=> {
    e.preventDefault();
    console.log("form is submitted with data");
    }
  return (
    <div>
      
    <h2>Registrationform</h2>
    <form onSubmit={handleSubmit}>
        <lable>Firstname</lable><br/>
        <input type="text" name="firstname" value={firstname} onChange={handleChange}/> <br/>
        
        <lable>Lastname</lable><br/>
        <input type="text" name="lastname" value={lastname} onChange={handleChange}/> <br/>     
        <lable>Email</lable><br/>    
        <input type="text" name="email" value={email} onChange={handleChange}/> <br/>
        <lable>Password</lable><br/>
        <input type="password" name="password" value={password} onChange={handleChange}/> <br/>
        <lable>Phonenumber</lable><br/>
        <input type="tel" name="Phonenumber" value={Phonenumber} onChange={handleChange}/> <br/>
        
        <input type ="submit" name = "submit"/>
    </form>
    </div>
  )
}

export default Registrationform
