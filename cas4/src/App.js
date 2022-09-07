import React,{useState, useEffect} from "react";

export function App(){


  const [name,setName] = useState('');
  const [lastname,setLastname] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [age,setAge] = useState('');

  useEffect(()=>{
  },[name,lastname,password,email,age])

  return(

    <div id="app">
      <h2>App</h2>
      <br/>
      <input
      type="text"
      placeholder="Name"
      value={name}
        onChange={(event)=>{setName(event.target.value)}}
        ></input>
        <br>
        </br>
        <br></br>
        <input
      type="text"
      placeholder="Last Name"
      value={lastname}
        onChange={(event)=>{setLastname(event.target.value)}}
        ></input>
        <br></br>
        <br></br>
        <input
      type="email"
      placeholder="Email"
      value={email}
        onChange={(event)=>{setEmail(event.target.value)}}
        ></input>
        <br></br>
        <br></br>
        <input
      type="password"
      placeholder="Password"
      value={password}
        onChange={(event)=>{setPassword(event.target.value)}}
        ></input>
        <br></br>
        <br></br>
        <input
      type="number"
      placeholder="Age"
      value={age}
        onChange={(event)=>{setAge(event.target.value)}}
        ></input>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th style={{backgroundColor:"yellow"}}>Lastname</th>
              <th>Email</th>
              <th style={{backgroundColor:"yellow"}}>Password</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <td>{name}</td>
            <td style={{backgroundColor:"yellow"}}>{lastname}</td>
            <td>{email}</td>
            <td style={{backgroundColor:"yellow"}}>{password}</td>
            <td>{age}</td>
          </tbody>
        </table>
    </div>
  )
}