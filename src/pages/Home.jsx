import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { delList, getList } from "../redux/listRedux";

const Home = () => {
  const dispacth = useDispatch();
  const todolist = useSelector((state) => state.todolist.list);
  useEffect(() => {
    dispacth(getList());
  }, []);
  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  const deleteList = (id) => {
    dispacth(delList(id));
  };
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
                ></img>
                Tambah
              </button>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            {todolist.length ? (
              todolist?.map((v, i) => (
                <Card key={i} data={v} deleteList={deleteList}></Card>
              ))
            ) : (
              <div className="col-12">
                <img alt="" src="./assets/image/activity-empty-state.svg" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
