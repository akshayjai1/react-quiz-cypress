import React from "react";
// import Select from "./Select";
// import Immer from "../type/Immer";

const Child = (props) => {
  // const { setter } = props;
  const [state, setState] = React.useState(1);
  const [state1, setState1] = React.useState(0);
  // const [state2, setState2] = React.useState();
  const inputRef = React.useRef();
  const onChange = (ev) => {
    setState(state + 1);
    // setState(inputRef.current.textContent);
    // setter(ev.target.value);
  };
  const onChange1 = (ev) => {
    setState1(state1 + 1);
    // setState(inputRef.current.textContent);
    // setter(ev.target.value);
  };
  React.useEffect(() => {
    console.log("first");
    return () => {
      console.log("unmounting");
    };
  }, []);
  const c = <input onChange={onChange} ref={inputRef} />;
  const d = <input onChange={onChange1} ref={inputRef} />;
  const e = <div ref={inputRef}>A Div</div>;
  console.log(c);
  return (
    <div>
      <div>A child</div>
      {c}
      {d}
      {e}
      {state}
    </div>
  );
};
export default Child;
