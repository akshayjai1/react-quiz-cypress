import React from "react";

const RefParent = (props) => {
  const re1 = React.createRef();
  let re2 = React.createRef();
  let re3 = null;
  let re4 = {};
  console.log("this is ref = re = ", re1);

  React.useEffect(() => {
    // debugger;
    console.log("this is ref in useEffect in RefParent", re1);
    console.log("this is ref in useEffect in RefParent", re2);
    console.log("this is ref in useEffect in RefParent", re3);
    console.log("this is ref in useEffect in RefParent", re4);
    window.reff = {
      re1,
      re2,
      re3,
      re4,
    };
  });
  return (
    <div>
      <p>RefParent component</p>
      <input name="first" ref={re1} />
      {/* re2 does */}
      <input
        name="second"
        ref={(e) => {
          re2 = e;
        }}
      />
      <input name="third" ref={re3} />
      <input name="fourth" ref={re4} />
    </div>
  );
};

export default RefParent;
