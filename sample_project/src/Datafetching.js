import React , {useState , useEffect}from 'react'

function Datafetching() {

const [data ,setData] = useState([])

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((resp) => setData(resp))
  
},[])
  return (
   <div>
    <h1>User Data</h1>
    <table border="1" >
      <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
        </tr>
      </thead>
      <tbody>
   {data.map((row) =>{
      return(
         <tr>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.username}</td>
            <td>{row.email}</td>
            <td>{row.address.city}</td>
          
         </tr>
        )
      })}
      </tbody>
       </table>
    </div>
  )
}

export default Datafetching

