import React from "react";
import { In, Heading } from "../../styled/styled";
const UncontrolledF = (props) => {
  const fRef1 = React.createRef();
  let fRef2;
  let fRef3 = null;
  let fRef4 = {};
  let fRef5 = React.useRef();
  console.log("this is ref = re = ", fRef1);
  let cb = (e) => {
    fRef2 = e;
  };
  let changeHandler = () => {
    fRef1.current = fRef1.current + "new Value";
    fRef5.current = fRef5.current + "new Value";
  };
  React.useEffect(() => {
    console.log("this is ref in useEffect in UncontrolledF", fRef1);
    console.log("this is ref in useEffect in UncontrolledF", fRef2);
    console.log("this is ref in useEffect in UncontrolledF", fRef3);
    console.log("this is ref in useEffect in UncontrolledF", fRef4);
    console.log(`fRef1 = ${fRef1.current} and fRef5 = ${fRef5.current}`);

    window.reff = {
      fRef1,
      fRef2,
      fRef3,
      fRef4,
    };
  });
  return (
    <div className="uncontrolled fence">
      <h3>Uncontrolled Functional Component</h3>

      <In name="first" ref={fRef1} />
      <In name="second" ref={cb} />
      <In name="third" ref={fRef3} />
      <In name="fourth" ref={fRef4} />
      <In name="fifth" ref={fRef5} />
      <Heading onClick={changeHandler}>Change State</Heading>
    </div>
  );
};

export default UncontrolledF;
