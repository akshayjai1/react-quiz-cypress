import React from 'react';
/** work on understanding what is the purpose of component, why is it doing composition
 * it is a function that returns component, but how do we justify that it takes a wrapper and
 * wraps component in it
 */
const HOC = (Wrapper) => {
  return (props) => {
    return (
      <Wrapper>
        <div>{props.a}</div>
      </Wrapper>
    );
  };
};

export default HOC;
