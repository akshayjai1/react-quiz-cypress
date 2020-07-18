import React from 'react';
import Select from './Select';

const ControlledChild = (props, ref) => {
  //   //debugger;
  const { data, setter } = props;
  const onChange = (ev) => {
    setter(ev.target.value);
  };
  const x = (
    <div>
      <div>A controlled child</div>
      <input ref={ref} onChange={onChange} value={data} />
    </div>
  );
  console.log(x);
  return x;
};
export default React.forwardRef(ControlledChild);
