import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import asyncHOC from "./components/hoc/asyncHOC";

function App() {
  let [actualState, setActualState] = React.useState(9);

  asyncHOC().then((result) => {
    setActualState(result);
  });
  /*
  let state = 1;
  let clickHandler = (x) => {
    state = state + x;
    console.log("state becomes  ", state);
    console.log("click handler", x);
  };
  let a = <div>A = {state}</div>;
  let c = <div>Actual State = {actualState}</div>;
  let b = (
    <button
      onClick={() => {
        clickHandler(3);
      }}>
      B
    </button>
  );
  let e = (
    <button
      onClick={() => {
        setActualState(actualState + 3);
      }}>
      E
    </button>
  );
  let d = [a, b, c, e];
 */

  // console.log("line 31", d);
  // console.log(asyncHOC);
  return actualState;
  // return asyncHOC();
}

export default App;
