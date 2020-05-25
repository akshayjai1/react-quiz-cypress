import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import QuizWrapper from "./components/quiz/QuizWrapper";
import AsyncCompResolver from "./components/hoc/AsyncCompResolver";
// import FP from "./components/func/FP";
import RefClass1 from "./components/ref/RefClass1";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Link to="/quiz">[ Quiz ]</Link>
      {/* <Link to="/fp">[ FP ]</Link> */}
      <Link to="/ref">[ Ref ]</Link>
      <Link to="/async">[ Async Component Loader ]</Link>
      <Link to="/">[ App ]</Link>
      <br />
      <Switch>
        <Route path="/quiz" component={QuizWrapper} />
        <Route path="/async" component={AsyncCompResolver} />
        {/* <Route path="/fp" component={FP} /> */}
        <Route path="/ref" component={RefClass1} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default React.memo(Routes);
