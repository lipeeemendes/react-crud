import { useState } from "react";

export default function App() {

  const[names,setNames] = useState([])
  const[name,setName]= useState("")


  return (
    <>
      <h1>Todo</h1>
      <input type="text" placeholder="write a task" />
      <button>add</button>
      <ul> 
       {names.map((name) => (
          <li key={name}>name</li>
      </ul>
    </>
  );
}