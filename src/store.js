import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from "./reducer";
import { rootSaga, helloSaga } from "./sagas/hello";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger, sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
