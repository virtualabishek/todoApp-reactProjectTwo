import { useState } from "react";

import TodoList from "./TodoList";
import Form from "./Form";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}
