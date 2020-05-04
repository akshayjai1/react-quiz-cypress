import React from "react";

const HOC1 = (Comp) => {
  //   const { parentName } = props;
  //   const Inner = (innerProps) => {
  //     return (
  //       <div>
  //         {parentName}-{innerProps.name}
  //       </div>
  //     );
  //   };
  return <Comp parName="ABC" />;
};

export default HOC1;
