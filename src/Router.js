import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import "./styles/route.scss";
import QuizWrapper from "./components/quiz/QuizWrapper";
import AsyncCompResolver from "./components/hoc/AsyncCompResolver";
import Ref from "./components/ref/Ref";

const Routes = (props) => {
  return (
    <BrowserRouter className="routes">
      <div className="routes">
        <Link className="route" to="/quiz">
          Quiz
        </Link>
        {/* <Link className="route" to="/fp"> FP </Link> */}
        <Link className="route" to="/ref">
          Ref
        </Link>
        <Link className="route" to="/async">
          Async Component Loader
        </Link>
        <Link className="route" to="/">
          App
        </Link>
      </div>
      <Switch>
        <Route path="/quiz" component={QuizWrapper} />
        <Route path="/async" component={AsyncCompResolver} />
        {/* <Route path="/fp" component={FP} /> */}
        <Route path="/ref" component={Ref} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default React.memo(Routes);
