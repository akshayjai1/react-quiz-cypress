import React from "react";
import Immer from "./Immer";

const Type = (props) => {
  debugger;
  return (
    <div>
      {props.match.params.ab}
      <Immer />
    </div>
  );
};

export default Type;
