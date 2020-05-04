import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import QuizWrapper from "./components/QuizWrapper";
import Frame, { f } from "./components/Frame";
import HOC from "./components/HOC";
import HOC1 from "./components/HOC1";

class App extends Component {
  render() {
    return (
      <div>
        <Frame title={"A Technology Quiz"} photo={1}>
          <Frame title={f} />

          {/* {() => {
            console.log("abc");
            return <Frame title="child" />;
          }} */}
        </Frame>

        {Frame({ title: "CAT", photo: "Cat Photo" })}

        <HOC parentName={"Parent"} />
        <HOC1 parName="par" Comp={Frame} />
        <QuizWrapper />
      </div>
    );
  }
}
export default App;
