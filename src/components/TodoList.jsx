import TodoItem from "./TodoItem";
export default function TodoList({ todos }) {
  return (
    <>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </>
  );
}
