import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Modal = ({ createItems, detailList }) => {
  const [selected, setSelected] = useState({
    title: "Very High",
    value: "very-high",
  });
  const [select] = useState([
    {
      title: "Very High",
      value: "very-high",
    },
    {
      title: "High",
      value: "high",
    },
    {
      title: "Normal",
      value: "normal",
    },
    {
      title: "Low",
      value: "low",
    },
    {
      title: "Very Slow",
      value: "very-low",
    },
  ]);
  const [inputs, setInputs] = useState({
    title: "",
    priority: "",
  });

  const getValue = () => {
    createItems(inputs);
  };
  useEffect(() => {
    if (!inputs.priority.length) {
      setInputs({ ...inputs, priority: selected.value });
    }
  }, [selected, inputs]);
  return (
    <div
      className="fade modal-add-activity modal modal-lg"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div
              className="pt-4 modal-title h4  d-flex"
              id="contained-modal-title-vcenter"
            >
              <h4 className="font-weight-bold" data-cy="modal-add-title">
                Tambah List Item
              </h4>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                data-cy="modal-add-close-button"
              ></button>
            </div>
          </div>
          <div className="modal-body">
            <div>
              <label data-cy="modal-add-name-title">NAMA LIST ITEM</label>
              <div data-cy="modal-add-name-input">
                <input
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      title: e.target.value,
                    })
                  }
                  placeholder="Tambahkan nama Activity"
                  id="AddFormTitle"
                  className="form-control"
                />
              </div>
              <label data-cy="modal-add-priority-title">priority</label>
              <div className="dropdown d-flex justify-content-start ">
                <button
                  className="btn btn-secondary dropdown-toggle p-2 bg-white text-black d-flex justify-content-start align-items-center pe-3"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div
                    className="dropdown-item d-flex justify-content-start align-items-center"
                    href="#"
                  >
                    <div
                      data-cy="todo-item-priority-indicator"
                      className={`label-indicator ${selected.value} ms-3`}
                    ></div>
                    {selected.title}
                  </div>
                </button>
                <ul className="dropdown-menu">
                  {select.map((v, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        setInputs({ ...inputs, priority: v.value });
                        setSelected(v);
                      }}
                    >
                      <div className="dropdown-item d-flex justify-content-start align-items-center">
                        <div
                          data-cy="todo-item-priority-indicator"
                          className={`label-indicator ${v.value} ms-3`}
                        ></div>
                        {v.title}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="pb-4 modal-footer">
            <button
              disabled={!inputs.title.length}
              className="btn btn-primary"
              id="AddFormSubmit"
              data-cy="modal-add-save-button"
              onClick={() => getValue()}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
