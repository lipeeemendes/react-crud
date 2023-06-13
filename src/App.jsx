import { useState } from "react";

export default function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");

  function handleClick() {
    setNames([...names, name]);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick2() {
    setName(name.filter((ele) => ele !== name));
  }

  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="type a task..."
        value={name}
        onChange={handleChange}
      />
      <button onClick={handleClick}>add</button>
      <ul>
        {names.map((name) => {
          <li key={name}>name</li>;
        })}
      </ul>
    </>
  );
}
