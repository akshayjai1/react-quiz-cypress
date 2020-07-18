import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { App } from './App';
import './styles/route.scss';
import QuizWrapper from './components/quiz/QuizWrapper';
import AsyncCompResolver from './components/hoc/AsyncCompResolver';
import Ref from './components/ref/Ref';
import Type from './components/type/Type';
import { ContextParent } from './components/context/ContextChild';
import { StateComp } from './components/state/StateComp';
// import FP from "./components/func/FP";

const RoutesC = (props) => {
  return (
    <BrowserRouter className="routes">
      <div className="routes">
        <Link className="route" to="/quiz">
          Quiz
        </Link>
        {/* <Link className="route" to="/fp">
          FP
        </Link> */}
        <Link className="route" to="/ref">
          Ref
        </Link>
        <Link className="route" to="/async">
          Async Component Loader
        </Link>
        <Link className="route" to="/">
          App
        </Link>
        <Link className="route" to="/context">
          Context
        </Link>
        <Link
          className="route"
          to={{
            pathname: '/type',
            state: 9,
          }}>
          Type
        </Link>
        <Link className="route" to="/state">
          State
        </Link>
      </div>
      <Switch>
        <Route path="/async" component={AsyncCompResolver} />
        {/* <Route path="/fp" component={FP} /> */}
        <Route path="/ref" component={Ref} />
        <Route path="/state" component={StateComp} />
        <Route path="/type" component={Type} />
        <Route path="/type/:ab" component={Type} />
        <Route path="/quiz" component={QuizWrapper} />
        <Route path="/context" component={ContextParent} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export const Router = React.memo(RoutesC);
