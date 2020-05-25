import { useState } from "react";
// import asyncHOC from "./asyncHOC";
import asyncHOC1 from "./asyncHOC1";

const AsyncCompResolver = (props) => {
  const [comp, setComp] = useState("Loading...");
  //   asyncHOC().then((result) => {
  //     setComp(result);
  //   });
  asyncHOC1().then((result) => {
    setComp(result);
  });

  return comp;
};

export default AsyncCompResolver;
