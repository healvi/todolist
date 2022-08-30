import React from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

const Card = ({ data, deleteList }) => {
  const navigate = useNavigate();
  return (
    <div className="col-3 ">
      <div className="activity-card" data-cy="activity-item" id="itemTodo0">
        <div
          className="activity-body touch-card"
          onClick={() => navigate(`detail/${data.id}`)}
        >
          <h4 data-cy="activity-item-title">{data.title}</h4>
        </div>
        <div className="card-footer">
          <span data-cy="activity-item-date">
            <Moment format="DD MMMM YYYY">1976-04-19T12:59-0500</Moment>
          </span>
          <img
            onClick={() => deleteList(data.id)}
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
