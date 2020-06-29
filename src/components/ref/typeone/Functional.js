import React, { useEffect, useRef } from "react";
// import { Button } from "../../styled";

const Functional = (props) => {
  let var1 = 1;
  let [var2 /* , setVar */] = React.useState(2);
  let reference = useRef("a ref");
  /* const changeHandler = async () => {
    console.log(`var1 = ${var1} and var2 = ${var2}`);
    var1 = 2;
    // await setVar(3);
    reference.current = reference.current + "abc";
    // reference["count"] = reference.current.length;
    console.log(
      `var1 = ${var1} and var2 = ${var2} and reference = ${reference.current}`
    );
  }; */
  useEffect(() => {
    debugger;
    console.log(
      `UseEffect: var1 = ${var1} and var2 = ${var2} and reference = ${reference.current}`
    );
  });
  return [3, 4];
  //{0:3, 1:4}
  /* return (
    <div>
      var1 = {var1}
      <br />
      var2 = {var2}
      <br />
      <div>{reference.current}</div>
      <Button onClick={changeHandler}>Change Var1</Button>
    </div> 
  );*/
};

export default Functional;
