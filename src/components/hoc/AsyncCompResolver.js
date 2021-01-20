// import { useState } from "react";
// import asyncHOC from "./asyncHOC";
// import asyncHOC1 from "./asyncHOC1";
import React from "react";
const AsyncCompResolver = (props) => {
  // const [comp, setComp] = useState("Loading...");
  //   asyncHOC().then((result) => {
  //     setComp(result);
  //   });
  // asyncHOC1().then((result) => {
  //   setComp(result);
  // });
  return (
    <input
      type="text"
      // value="abc"
      onChange={(e) => {
        console.log(e.target.value);
        debugger;
      }}
    />
  );
  // return comp;
};

export default AsyncCompResolver;
