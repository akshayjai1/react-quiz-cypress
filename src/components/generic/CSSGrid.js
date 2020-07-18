import React, { useState } from 'react';

export const CSSGrid = (props) => {
  const [total, setTotal] = useState(0);
  const calculateTotal = (e) => {
    const text = e.target.value;
    const numbers = text.split(' ').map((e) => parseFloat(e));
    const sum = numbers.reduce((acc, s) => acc + s, 0);
    setTotal(sum);
  };
  return (
    <div>
      <div>Enter css grid values to see the total</div>
      <input
        type="text"
        name="grid-numbers"
        style={{ width: '500px' }}
        className="grid-numbers"
        onChange={calculateTotal}
      />
      <div>Total = {total}</div>
    </div>
  );
};
