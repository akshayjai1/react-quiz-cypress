import React, { useEffect } from "react";
import { Button } from "../../styled";

const ForwardedRefChild = ({
  forwardedRef,
  value,
  onClick,
  newRef,
  secondRef,
  changeSecondRef,
}) => {
  useEffect(() => {
    console.log(forwardedRef.current, "Child Component");
    console.log(newRef.current, "Child Component");
    console.log(secondRef.current, "Child Component");
  });

  return (
    <div className="fence">
      <p ref={forwardedRef}>{value}</p>
      <div ref={newRef}>Attached to new Ref</div>
      <div ref={secondRef}>Attached to Second Ref</div>
      <Button
        onClick={() => {
          onClick("red");
        }}>
        Change Color
      </Button>
      <Button onClick={() => changeSecondRef({ current: 6 })}>
        Change Second Ref
      </Button>
    </div>
  );
};

export default ForwardedRefChild;
