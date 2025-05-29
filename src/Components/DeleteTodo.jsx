import { MdDelete, MdCancel, MdSave } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";

const DeleteTodo = ({
  todo,
  onDelete,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  onFinish,
}) => {
  return (
    <>
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button className="save-btn" onClick={onSave}>
              <MdSave />
            </button>
            <button className="cancel-btn" onClick={onCancel}>
              <MdCancel />
            </button>
          </>
        ) : (
          <>
            <button className="delete-btn" onClick={() => onDelete(todo.id)}>
              <MdDelete />
              {/* del */}
            </button>
            <button className="edit-btn" onClick={onEdit}>
              <FaRegEdit />
            </button>
            <button className="finish-btn" onClick={() => onFinish(todo.id)}>
              <AiOutlineFileDone />
            </button>
          </>
        )}
      </div>
    </>
  );
};
export default DeleteTodo;
