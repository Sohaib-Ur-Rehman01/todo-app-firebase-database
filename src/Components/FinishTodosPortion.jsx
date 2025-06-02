import React from "react";
import { MdDelete } from "react-icons/md";
import dayjs from "dayjs";

import "../App.css";
const CompletedTasks = ({
  finishedTodos,
  onDelete,
  onUnfinish,
  ontoggleSort,
  sortOrder,
}) => {
  return (
    <>
      <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        <div className="completed-list">
          {finishedTodos.length === 0 ? (
            <h2>No Task Completed</h2>
          ) : (
            finishedTodos.map((todo) => {
              const isLate = todo.finishedLate;
              const finishedTime = dayjs(todo.finishedAt);
              const dueTime = dayjs(todo.dueDate);
              return (
                <div
                  className={`completed-card ${isLate ? "late" : "on-time"}`}
                  key={todo.id}
                >
                  <div className="completed-content">
                    <div className="task-text">{todo.text}</div>

                    <div className="timeline-info">
                      <div className="timeline-row">
                        <span className="timeline-label">Created:</span>
                        <span>
                          {dayjs(todo.createdAt).format("MMM D,YYYY h:mm A")}
                        </span>
                      </div>
                      <div className="timeline-row">
                        <span className="timeline-label">Due Date:</span>
                        <span className={isLate ? "overdue" : ""}>
                          {dueTime.format("MMM D,YYYY h:mm A")}
                        </span>
                      </div>
                      <div className="timeline-row">
                        <span className="timeline-label">FInished At:</span>
                        <span>{finishedTime.format("MMM D,YYYY h:mm A")}</span>
                      </div>
                      {isLate && (
                        <div className="late-indicator">
                          <span className="indicator-dot"></span>
                          Finished Late
                        </div>
                      )}
                    </div>
                  </div>
                  <br />
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
              );
            })
          )}
          <button onClick={ontoggleSort} className="sort-button">
            Sort by Completed Time {sortOrder === "asc" ? "↑ Asc" : "↓ Desc"}
          </button>
        </div>
      </div>
    </>
  );
};
export default CompletedTasks;
