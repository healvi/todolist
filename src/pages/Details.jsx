import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Lists from "../components/Lists";
import Modal from "../components/Modal";
import {
  creaateItem,
  delItem,
  delList,
  getDetailList,
} from "../redux/listRedux";

const Details = () => {
  const dispacth = useDispatch();
  const detailList = useSelector((state) => state.todolist.detailList);
  const items = useSelector((state) => state.todolist.items);
  let params = useParams();
  useEffect(() => {
    dispacth(getDetailList(params.id));
  }, []);
  useEffect(() => {}, [detailList, items]);
  const deleteItems = (id) => {
    dispacth(delItem(id, detailList.id));
  };
  const createItems = (data) => {
    dispacth(creaateItem(data, detailList.id));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row d-flex justify-content-between my-5">
            <div className="col-5 d-flex justify-content-start align-items-center">
              <div className="icon-back" data-cy="todo-back-button">
                <img
                  className="icon-sort"
                  src="../assets/image/todo-back-button.svg"
                  alt=""
                ></img>
              </div>
              <h1 data-cy="todo-title">{detailList.title}</h1>
              <div data-cy="todo-title-edit-button" className="mx-3">
                <img
                  className="icon-sort"
                  src="../assets/image/todo-item-edit-button.svg"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-end">
              <button
                id="ButtonSort"
                data-cy="todo-sort-button"
                className="btn-sort"
              >
                <img
                  className="icon-sort"
                  src="../assets/image/icon-sort.svg"
                  alt=""
                ></img>
              </button>
              <button
                className="btn btn-primary"
                data-cy="activity-add-button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  className="icon-sort"
                  src="../assets/image/tabler_plus.svg"
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
              {items.length ? (
                items?.map((v, i) => (
                  <Lists key={i} data={v} deleteItems={deleteItems} />
                ))
              ) : (
                <div className="col-12">
                  <img alt="" src="../assets/image/todo-empty-state.svg" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal createItems={createItems} detailList={detailList} />
    </div>
  );
};

export default Details;
