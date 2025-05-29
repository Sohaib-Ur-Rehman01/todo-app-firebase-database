import React from "react";
import { MdDelete } from "react-icons/md";

import "../App.css";
const CompletedTasks = ({ finishedTodos, onDelete, onUnfinish }) => {
  return (
    <>
      <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        <div className="completed-list">
          {finishedTodos.length === 0 ? (
            <h2>No Task Completed</h2>
          ) : (
            finishedTodos.map((todo) => (
              <div className="completed-card" key={todo.id}>
                <span>{todo.text}</span>
                <div className="buttons-group">
                  <button
                    onClick={() => onDelete(todo.id)}
                    className="completed-task-btn"
                  >
                    <MdDelete />
                  </button>
                  <button
                    onClick={() => onUnfinish(todo.id)}
                    className="unfinish-btn"
                  >
                    UnFinish Task
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default CompletedTasks;
