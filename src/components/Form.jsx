import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false }); // Initialize as object

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]); // Add the todo object to the list
    setTodo({ name: "", done: false }); // Reset the input
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })} // Update the name property
          value={todo.name} // Bind to the name property
          type="text"
          placeholder="Enter todo Item."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
