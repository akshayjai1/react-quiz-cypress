import React, { useState } from 'react';
/**
 * this is dummy context component
 * @param props
 */
export const StateComp = (props: any) => {
  const [s, ss] = useState('hi');
  // ss('bye');
  return (
    <div>
      <h4>State Component</h4>
      <div>This is the value of state {s}</div>
    </div>
  );
};
