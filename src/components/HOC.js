import React from "react";

const HOC = (props) => {
  const { parentName } = props;
  const Inner = (innerProps) => {
    return (
      <div>
        {parentName}-{innerProps.name}
      </div>
    );
  };
  return <Inner name="ABC" />;
};

export default HOC;
