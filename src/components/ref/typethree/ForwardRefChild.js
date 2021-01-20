import React, { forwardRef } from "react";

const ForwardRefChild = (props, ref1) => {
  const { newRef } = props;
  debugger;
  console.log("ForwardRefChild", ref1);
  console.log("ForwardRefChild", newRef);
  return (
    <div className="fence">
      <h3>Forward Ref Child</h3>
      <div       ref={ref1}> Attaching forwardRef to this dom element</div>
      <div ref={newRef}>Attaching forwardRef to this dom element</div>
    </div>
  );
};

export default forwardRef(ForwardRefChild);
