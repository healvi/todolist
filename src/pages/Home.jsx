import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row d-flex justify-content-between my-5">
            <div className="col-3">
              <h1 data-cy="activity-title">Activity</h1>
            </div>
            <div className="col-5 d-flex justify-content-end">
              <button className="btn btn-primary" data-cy="activity-add-button">
                <img
                  className="icon-sort"
                  src="./assets/image/tabler_plus.svg"
                  alt=""
                ></img>{" "}
                Tambah
              </button>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <Card></Card>
            <div className="col-12">
              <img alt="" src="./assets/image/activity-empty-state.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
