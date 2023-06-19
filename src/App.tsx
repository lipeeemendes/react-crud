import { useState, useEffect, ChangeEvent } from "react";
import "./index.css";

type Task = {
  id: string;
  title: string;
  status: boolean;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[] | []>(
    () => JSON.parse(localStorage.getItem("tasks") as string) || []
  );
  const [name, setName] = useState<string>("");

  function handleClick() {
    const newTodo: Task = {
      id: crypto.randomUUID(),
      title: name,
      status: false,
    };
    setTasks([...tasks, newTodo]);
    setName("");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function deleteTodo(id: string) {
    const newList: Task[] = tasks.filter((task) => task.id !== id);
    setTasks([...newList]);
  }

  function toggleTodo(id: string) {
    const newList: Task[] = tasks.map((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });
    setTasks([...newList]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <h1>Todo List </h1>
      <input
        type="text"
        placeholder="Type a task..."
        value={name}
        onChange={handleChange}
        className="task"
      />
      <button onClick={handleClick} className="add">
        Add
      </button>
      <ul>
        <div>
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <input
                type="checkbox"
                checked={task.status}
                onChange={() => toggleTodo(task.id)}
                className="checkbox"
              />
              <span>{task.title}</span>
              <button onClick={() => deleteTodo(task.id)} className="delete">
                &#x1F5D1;&#xFE0F;
              </button>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
}
