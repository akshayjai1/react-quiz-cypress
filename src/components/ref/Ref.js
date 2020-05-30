import React from "react";
import Uncontrolled from "./typeone/Uncontrolled";
import UncontrolledF from "./typeone/UncontrolledF";
import ForwardedRefParent from "./typetwo/ForwardedRefParent";
import ForwardRefParent from "./typethree/ForwardRefParent";
import Functional from "./typeone/Functional";
const Cont = React.createContext();

const Ref = (props) => {
  return (
    <>
      <Functional />
      {true && (
        <>
          <Cont.Provider value={8}>
            <Uncontrolled />
          </Cont.Provider>
          <UncontrolledF />
        </>
      )}
      <hr />
      {false && <ForwardedRefParent />}
      {/* <ForwardRefParent /> */}
    </>
  );
};

export default Ref;
