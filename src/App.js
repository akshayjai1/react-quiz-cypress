import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import QuizWrapper from "./components/quiz/QuizWrapper";

import Frame, { f } from "./components/func/Frame";
import HOC from "./components/hoc/HOC";
import HOC1 from "./components/hoc/HOC1";
import Button from "./components/styled/Button";
console.log("imported button in app", Button);
console.log("imported Frame in App", Frame);
console.log("imported HOC in App", HOC);
class App extends Component {
  render() {
    return (
      <div>
        <Link to="/quiz">Quiz App</Link>
        <Button>first button</Button>
        <Frame title={"A Technology Quiz"} photo={1}>
          {/* <Frame title={f} /> */}
          {/* {() => {
            console.log("abc");
            return <Frame title="child" />;
          }} */}
        </Frame>

        {Frame({ title: "CAT", photo: "Cat Photo" })}

        <HOC parentName={"Parent"} />
      </div>
    );
  }
}
export default App;
