import React from "react";
import Select from "./Select";

const Child = (props) => {
  const { setter } = props;
  const onChange = (ev) => {
    setter(ev.target.value);
  };
  return (
    <div>
      <div>A child</div>
      <input onChange={onChange} />
    </div>
  );
};
export default Child;
