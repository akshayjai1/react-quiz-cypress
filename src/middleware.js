import {} from "./constants/actionTypes";

export const thunkMiddleware = (store) => (next) => (action) => {
  console.log("in thunk middleware", store, next, action);
  if (typeof action === "function") {
    action(store.dispatch);
  } else {
    next(action);
  }
};

/* sagaMiddleware = (store) => next => action => {
 next(action);   
} */
// export { promiseMiddleware };

/// inside the code of createStore
/* dispatch
thunkMiddleware({store.getState,store.dispatch})(reducer)



(action) => {
  console.log("in thunk middleware", store, next, action);
  if (typeof action === "function") {
    action(store.dispatch);
  } else {
    next(action);
  }
};
 */
/* 
 store {

 }

 reducer function (state, action)

 dispatch // work of dispatch is to make the action reach reducer */
