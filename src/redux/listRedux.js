import { createSlice } from "@reduxjs/toolkit";
import { axioscall } from "../app/axios";

const initialState = {
  list: [],
  donelist: [],
  detailList: [],
  items : []
};

const listReducer = createSlice({
  name: "list",
  initialState,
  reducers: {
    setListGlobal: (state, action) => {
      state.list = action.payload;
    },
    setDoneListGlobal: (state, action) => {
      state.donelist = action.payload;
    },
    setDetailsListGlobal: (state, action) => {
      state.detailList = action.payload;
    },
    setItemsGlobal: (state, action) => {
      state.items = action.payload;
    },
  },
});

const getList = () => async (dispatch) => {
  await axioscall
    .get("/activity-groups?email=healvi%2B1%40skyshi.io")
    .then((response) => {
      dispatch(setListGlobal(response.data.data));
    })
    .catch((e) => {
      console.log(e);
    });
};

const delList = (id) => async (dispatch) => {
  await axioscall
    .delete(`/activity-groups/${id}`)
    .then((response) => {
      dispatch(getList());
    })
    .catch((e) => {
      console.log(e);
    });
};



const getDetailList = (id) => async (dispatch) => {
  await axioscall
    .get(`/activity-groups/${id}`)
    .then((response) => {
    dispatch(setDetailsListGlobal(response.data))
    dispatch(getListItem(response.data.id))
    })
    .catch((e) => {
      console.log(e);
    });
};

const getListItem = (id) => async (dispatch) => {
  await axioscall
    .get(`/todo-items?activity_group_id=${id}`)
    .then((response) => {
    dispatch(setItemsGlobal(response.data.data))
    })
    .catch((e) => {
      console.log(e);
    });
};

const delItem = (idItems, idList) => async (dispatch) => {
    await axioscall
      .delete(`/todo-items/${idItems}`)
      .then((response) => {
        dispatch(getListItem(idList));
      })
      .catch((e) => {
        console.log(e);
      });
  };

const createItem = (data, idList) => async (dispatch) => {
    
    await axioscall
      .post(`/todo-items`, {
        ...data,
        activity_group_id: idList,
      })
      .then((response) => {
        dispatch(getListItem(idList));
      })
      .catch((e) => {
        console.log(e);
      });
  };


const updateItem = (data, idList) => async (dispatch) => {
    
    await axioscall
      .patch(`/todo-items/${data.id}`, {
        ...data
      })
      .then((response) => {
        dispatch(getListItem(idList));
      })
      .catch((e) => {
        console.log(e);
      });
  };

const setDoneList = (list) => (dispatch) => {
  dispatch(setDoneListGlobal(list));
};
export {updateItem, createItem, getList, setDoneList, delList, getDetailList, getListItem, delItem };
export const { setItemsGlobal,setListGlobal, setDoneListGlobal, setDetailsListGlobal } = listReducer.actions;
export default listReducer.reducer;
