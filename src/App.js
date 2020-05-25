import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import QuizWrapper from "./components/quiz/QuizWrapper";

import Frame, { f } from "./components/func/Frame";
import HOC from "./components/hoc/HOC";
import Button from "./components/styled/Button";
import asyncHOC from "./components/hoc/asyncHOC";
// console.log("imported button in app", Button);
// console.log("imported Frame in App", Frame);
// console.log("imported HOC in App", HOC);
// class App extends Component {
//   abc = (<div>A</div>);
//   render() {
//     console.log("line 1", this.abc);
//     return (
//       <div>
//         {this.abc}
//         <Link to="/quiz">Quiz App</Link>
//         <Button>first button</Button>
//         <HOC a={"Parent"} />
//       </div>
//     );
//   }
// }

function App() {
  let state = 1;
  let a = <div>A = {state}</div>;

  let c = <div>Actual State = {actualState}</div>;

  let [actualState, setActualState] = React.useState(9);

  let clickHandler = (x) => {
    state = state + x;
    console.log("state becomes  ", state);
    console.log("click handler", x);
  };
  asyncHOC().then((result) => {
    setActualState(result);
  });
  let b = (
    <button
      onClick={() => {
        clickHandler(3);
      }}
    >
      B
    </button>
  );
  let e = (
    <button
      onClick={() => {
        setActualState(actualState + 3);
      }}
    >
      E
    </button>
  );
  let d = [a, b, c, e];

  // console.log("line 31", d);
  // console.log(asyncHOC);
  return actualState;
  // return asyncHOC();
}

export default App;
