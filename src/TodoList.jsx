import TodoItem from "./Components/TodoItem";
const TodoList = ({ todos, onDelete, onUpdate, onFinish }) => {
  return (
    <>
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
