import React from "react";

const Select = (props) => {
  const { setter } = props;
  const onChange = (ev) => {
    setter(ev.target.value);
  };
  return (
    <div>
      <div>A Select box</div>
      <select onChange={onChange}>
        <option>1</option>
        <option>2</option>
      </select>
    </div>
  );
};
export default Select;
