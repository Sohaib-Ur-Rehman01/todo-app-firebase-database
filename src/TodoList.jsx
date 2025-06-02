import TodoItem from "./Components/TodoItem";
const TodoList = ({
  todos,
  onDelete,
  onUpdate,
  onFinish,
  ontoggleSort,
  sortOrder,
}) => {
  return (
    <>
      <div className="todo-list-header">
        <h2>Todos</h2>
        <button className="sort-button" onClick={ontoggleSort}>
          Sort by Due Date {sortOrder === "asc" ? "↑ Asc" : "↓ Desc"}
        </button>
      </div>
      <div id="show-output">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onFinish={onFinish}
          />
        ))}
      </div>
    </>
  );
};
export default TodoList;
