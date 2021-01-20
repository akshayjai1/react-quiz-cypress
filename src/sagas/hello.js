import { put, takeEvery, all } from 'redux-saga/effects';
import { increment, incrementAsync } from '../slices/inc';
export function* helloSaga() {
  //debugger;
  yield;
  console.log("Hello Sagas!");
  console.log('Hello Sagas!');
  //debugger;
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// ...

// Our worker Saga: will perform the async increment task
export function* incrementAsyncSaga() {
  console.log("in incrementAsyncSaga");
  console.log('in incrementAsyncSaga');
  //debugger;
  yield delay(1000);
  //debugger;
  yield put(increment());
  //debugger;
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  //debugger;
  yield takeEvery(incrementAsync, incrementAsyncSaga);
  // yield take(login, loginListener);
  // yield take(logout, logoutListener);
  // yield takeEvery(increment, incrementAsyncSaga);
  //debugger;
  yield 4;
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
