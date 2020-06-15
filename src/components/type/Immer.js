import React, { Dispatch } from "react";

const Immer = (props) => {
  console.log("This is react", React);
  console.log("This is Dispatch", Dispatch);
  console.log(props.children);
  debugger;
  return (
    <div>
      Immer
      <div>Children Below</div>
      <div>{document.location.pathname}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Immer;
