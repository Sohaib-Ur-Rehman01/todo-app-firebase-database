import { useState } from "react";
import DeleteTodo from "./DeleteTodo";
import dayjs from "dayjs";
const TodoItem = ({ todo, onDelete, onUpdate, onFinish }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const now = dayjs();
  const isOverDue = now.isAfter(dayjs(todo.dueDate));

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
      <div
        className={`todo-item ${isOverDue ? "overdue-item" : ""}`}
        key={todo.id}
      >
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            autoFocus
          />
        ) : (
          <>
            <div className="todo-content">
              <span className="todo-text">{todo.text}</span>
              <div className="todo-meta">
                <small>
                  Created: {dayjs(todo.createdAt).format("MMM D,YYYY h:mm A")}
                </small>
                <br />
                <small className={`due-date ${isOverDue ? "overdue" : ""}`}>
                  Due:{dayjs(todo.dueDate).format("MMM D,YYYY h:mm A")}
                </small>
              </div>
            </div>
          </>
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
