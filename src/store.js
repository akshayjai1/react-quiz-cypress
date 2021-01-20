// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
// import reducer from "./reducer";
// import { rootSaga } from "./sagas/hello";
// // import { createStore } from "redux";
// // import { thunkMiddleware } from "./middleware";

// const sagaMiddleware = createSagaMiddleware();
// export const store = configureStore({
//   reducer,
//   middleware: [...getDefaultMiddleware(), logger, sagaMiddleware],
// });
// sagaMiddleware.run(rootSaga);

/**
 * 
 * 
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducer';

export const store = configureStore({
	reducer,
	middleware: [ ...getDefaultMiddleware(), logger ]
});
