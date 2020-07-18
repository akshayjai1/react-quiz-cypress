import React from 'react';
// import "./fp1.js";
import Frame from './Frame.js';
import {
  ReactInput,
  ReactSelect,
  ReactSelect1,
  ReactInput1,
  Comp1,
  Comp2,
} from './fp2.js';
import Parent from './Parent.js';
const FP = (props) => {
  //debugger;
  return (
    <div>
      <div>Functional Programming as a precursor to React Development</div>
      {/* <Frame title="Frame" match={props.match} /> */}
      <br />
      <br />
      <br />
      {/* <Comp1 />
      <Comp2 />
      <hr />
      <ReactSelect1 />
      <ReactInput1 /> */}
      <Parent />
    </div>
  );
};
export default FP;
