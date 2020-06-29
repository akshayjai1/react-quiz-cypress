import React, { useRef, useEffect, useState } from "react";

function ForwardedRefParent() {
  const childRef = useRef({ ab: 1 });
  const [state, setState] = useState(1);

  // const newRef = useRef(null);
  let x = {};
  /* const onClick = (color) => {
    console.log(color);
    childRef.current.style.color = color;
  }; */

  useEffect(() => {
    console.log(childRef.current, "Parent Component");
    console.log(x.current, "Parent Component");
    console.log(state.current, "Parent Component");
  });
  debugger;
  console.log(childRef);
  return (
    <div className="fence">
      State.current = {state}
      {/*<ForwarededRefChild
        forwardedRef={childRef}
        newRef={x}
        secondRef={state}
        changeSecondRef={setState}
        // newRef={newRef}
        value="ChildRef value"
        onClick={onClick}
      />*/}
      <button
        onClick={() => {
          console.log("state", state);
          setState(state + 1);
        }}
      >
        Change State
      </button>
      <button
        onClick={() => {
          childRef.current.ab = childRef.current.ab + 1;
        }}
      >
        Increment Ref
      </button>
      <div>Ref value = {childRef.current.ab}</div>
    </div>
  );
}

export default ForwardedRefParent;
