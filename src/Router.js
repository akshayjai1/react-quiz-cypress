import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import QuizWrapper from "./components/quiz/QuizWrapper";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/quiz" component={QuizWrapper} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default React.memo(Routes);
