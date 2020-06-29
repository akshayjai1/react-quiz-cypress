import React from "react";
import Uncontrolled from "./typeone/Uncontrolled";
import UncontrolledF from "./typeone/UncontrolledF";
import ForwardedRefParent from "./typetwo/ForwardedRefParent";
import Functional from "./typeone/Functional";
const Cont = React.createContext();

const Ref = (props) => {
  return (
    <div>
      <Functional />
      {true && (
        <div>
          <Cont.Provider value={8}>
            <Uncontrolled />
          </Cont.Provider>
          <UncontrolledF />
        </div>
      )}
      <hr />
      <ForwardedRefParent />
      {/* <ForwardRefParent /> */}
    </div>
  );
};

export default Ref;
