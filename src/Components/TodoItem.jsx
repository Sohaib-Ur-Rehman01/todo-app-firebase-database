import { useState } from "react";
import DeleteTodo from "./DeleteTodo";
const TodoItem = ({ todo, onDelete, onUpdate, onFinish }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handlEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(todo.id, editText.charAt(0).toUpperCase() + editText.slice(1));
      setIsEditing(false);
    }
  };
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };
  const handleFinish = () => {
    onFinish(todo.id);
  };
  return (
    <>
      <div className="todo-item" key={todo.id}>
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span>{todo.text}</span>
        )}

        <DeleteTodo
          todo={todo}
          onDelete={onDelete}
          isEditing={isEditing}
          onEdit={handlEdit}
          onSave={handleSave}
          onCancel={handleCancel}
          onFinish={handleFinish}
        />
      </div>
    </>
  );
};
export default TodoItem;
