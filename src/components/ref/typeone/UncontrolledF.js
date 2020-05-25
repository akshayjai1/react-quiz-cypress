import React from "react";
import { In } from "../../styled/index";
const UncontrolledF = (props) => {
  const fRef1 = React.createRef();
  let fRef2 = React.createRef();
  let fRef3 = null;
  let fRef4 = {};
  console.log("this is ref = re = ", fRef1);

  React.useEffect(() => {
    console.log("this is ref in useEffect in UncontrolledF", fRef1);
    console.log("this is ref in useEffect in UncontrolledF", fRef2);
    console.log("this is ref in useEffect in UncontrolledF", fRef3);
    console.log("this is ref in useEffect in UncontrolledF", fRef4);
    window.reff = {
      fRef1,
      fRef2,
      fRef3,
      fRef4,
    };
  });
  return (
    <div>
      <h3>Uncontrolled Functional Component</h3>
      <In name="first" ref={fRef1} />
      {/* fRef2 does */}
      <In
        name="second"
        ref={(e) => {
          fRef2 = e;
        }}
      />
      <In name="third" ref={fRef3} />
      <In name="fourth" ref={fRef4} />
    </div>
  );
};

export default UncontrolledF;
