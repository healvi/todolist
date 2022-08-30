import React from "react";

const Details = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row d-flex justify-content-between my-5">
            <div className="col-3">
              <div class="icon-back" data-cy="todo-back-button">
                <img
                  className="icon-sort"
                  src="./assets/image/icon-sort.svg"
                  alt=""
                ></img>
              </div>
              <h1 data-cy="todo-title">New Activity</h1>
            </div>
            <div className="col-5 d-flex justify-content-end">
              <button
                id="ButtonSort"
                data-cy="todo-sort-button"
                className="btn-sort"
              >
                <img
                  className="icon-sort"
                  src="./assets/image/icon-sort.svg"
                  alt=""
                ></img>
              </button>
              <button className="btn btn-primary" data-cy="activity-add-button">
                <img
                  className="icon-sort"
                  src="./assets/image/tabler_plus.svg"
                  alt=""
                ></img>
                Tambah
              </button>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <img alt="" src="./assets/image/activity-empty-state.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
