import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { useDispatch } from "react-redux";

import { Heading, Wrapper, Title } from "./components/styled/styled";
import { StyledButtons } from "./components/styled/StyledButtons";
import { fetch } from "./slices/hacker";
import { incrementAsync } from "./slices/inc";
export function App() {
  const dispatch = useDispatch();
  return (
    <div>
      {/* <Heading>
        Redux App <span>-Thunk - Saga - StyleComponents</span>
      </Heading> */}
      <Wrapper>
        <Title>
          Redux App <span>-Thunk - Saga - StyleComponents</span>
        </Title>
      </Wrapper>
      <StyledButtons />
      <Heading onClick={() => dispatch(fetch())}>redux action</Heading>
      <Heading
        onClick={() => dispatch(incrementAsync())}
        // onClick={() =>
        //   dispatch({
        //     type: "INCREMENT_ASYNC",
        //   })
        // }
      >
        redux saga action
      </Heading>
    </div>
  );
}
