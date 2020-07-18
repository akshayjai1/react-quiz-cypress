import React from 'react';
import Child from './Child';
import Select from './Select';
import ControlledChild from './ControlledChild';

const Parent = (props) => {
  const [data, setData] = React.useState('');
  const [data1, setData1] = React.useState('');
  const [data2, setData2] = React.useState('');
  const [data3, setData3] = React.useState('');
  const ref = React.useRef();
  const reset = () => {
    setData1(0);
    setData(0);
    setData2(0);
    setData3(0);
  };
  const r = React.createRef();
  //debugger;
  return (
    <div>
      <div>A child wrapper</div>
      <div style={{ border: '1px solid red' }}>
        Data coming from child = {data}
        debuger; Data from ref = {r.current}
      </div>
      <button onClick={reset}>Reset</button>
      <Child setter={setData} />

      <Select setter={setData} />
      <ControlledChild data={data} setter={setData} ref={r} />
      <ControlledChild data={data1} setter={setData1} />
      <ControlledChild data={data2} setter={setData2} />
      <ControlledChild data={data3} setter={setData3} />
    </div>
  );
};
export default Parent;
