import React from 'react';
import Immer from './Immer';
import { Delegate } from '../generic/Delegate';
const Type = (props) => {
  //debugger;
  return (
    <div>
      {props.match.params.ab}
      <Immer />
      <Delegate propName="propName" />
    </div>
  );
};

export default Type;
