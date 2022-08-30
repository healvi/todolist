import React from "react";

const Lists = ({ data, deleteItems }) => {
  return (
    <div className="detail-content">
      <div className="content-item" data-cy="todo-item">
        <div className="d-flex align-items-center form-check">
          <div className="ms-3">
            <input
              data-cy="todo-item-checkbox"
              type="checkbox"
              id="default-21421"
              className="form-check-input"
            />
          </div>
          <div
            data-cy="todo-item-priority-indicator"
            className={`label-indicator ${data.priority} ms-3`}
          ></div>
          <span data-cy="todo-item-title" className="false ms-3">
            {data.title}
          </span>
          <div data-cy="todo-item-edit-button" className=" ms-3">
            <img
              className="icon-sort"
              src="../assets/image/todo-item-edit-button.svg"
              alt=""
            ></img>
          </div>
        </div>
        <img
          onClick={() => deleteItems(data.id)}
          src="https://ivan-todo-devrank.netlify.app/static/media/icon-delete.1e080ddb.svg"
          alt="delete"
          data-cy="todo-item-delete-button"
        />
      </div>
    </div>
  );
};

export default Lists;
