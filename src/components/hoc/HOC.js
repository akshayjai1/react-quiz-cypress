import React from "react";

const HOC = () => {
  return (props) => {
    return <div>{props.a}</div>;
  };
};

export default HOC;
