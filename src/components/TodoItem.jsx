import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete Item Clicked for", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(item) {
    console.log("Item Clicked.", item);
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span onClick={() => handleClick(item)}>{item}</span> {/* Corrected */}
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
