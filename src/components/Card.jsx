import React from "react";

const Card = () => {
  return (
    <div className="col-3">
      <div class="activity-card" data-cy="activity-item" id="itemTodo0">
        <div class="activity-body">
          <h4 data-cy="activity-item-title">New Activity</h4>
        </div>
        <div class="card-footer">
          <span data-cy="activity-item-date">30 Agustus 2022</span>
          <img
            src="https://ivan-todo-devrank.netlify.app/static/media/icon-delete.1e080ddb.svg"
            alt="delete"
            data-cy="activity-item-delete-button"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
