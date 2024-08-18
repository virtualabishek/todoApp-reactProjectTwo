import { useState } from "react";
import TodoItem from "./TodoItem";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </>
  );
}
