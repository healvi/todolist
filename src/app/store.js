import { combineReducers, configureStore } from "@reduxjs/toolkit";
import alertReducer from "../redux/alertRedux";
import listReducer from "../redux/listRedux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['donelist'] 
};
const rootReducer = combineReducers({
  alerts: alertReducer,
  todolist : listReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

export const persistor = persistStore(store);