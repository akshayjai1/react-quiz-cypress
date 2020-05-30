import React, { useRef, useEffect, useState } from "react";

import ForwarededRefChild from "./ForwardedRefChild";

function ForwardedRefParent() {
  const childRef = useRef(null);
  const [state, setState] = useState({});
  // const newRef = useRef(null);
  let x = {};
  const onClick = (color) => {
    console.log(color);
    childRef.current.style.color = color;
  };

  useEffect(() => {
    console.log(childRef.current, "Parent Component");
    console.log(x.current, "Parent Component");
    console.log(state.current, "Parent Component");
  });
  debugger;
  return (
    <div className="fence">
      State.current = {state.current}
      <ForwarededRefChild
        forwardedRef={childRef}
        newRef={x}
        secondRef={state}
        changeSecondRef={setState}
        // newRef={newRef}
        value="ChildRef value"
        onClick={onClick}
      />
    </div>
  );
}

export default ForwardedRefParent;
