import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete Item Clicked for", item.name);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(item) {
    const newArray = todos.map((todo) =>
      todo.name === item.name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log("Updated Todos:", newArray);
  }

  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item)}>
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
