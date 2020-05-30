import React, { useRef, useEffect } from "react";
import ForwardRefChild from "./ForwardRefChild";
import { Button } from "../../styled";

const ForwardRefParent = (props) => {
  const reference = useRef(null);
  debugger;
  let newReference = {};
  useEffect(() => {
    debugger;
    console.log("Forward Ref Parent", reference);
    console.log("Forward Ref Parent", newReference);
    return () => {
      //
    };
  });
  return (
    <div className="fence">
      <h3>Forward Ref Parent</h3>
      <Button
        onClick={() => {
          alert(reference.current.textContent);
        }}>
        Display Child's content
      </Button>
      <ForwardRefChild ref={reference} newRef={newReference} />
    </div>
  );
};

export default ForwardRefParent;
