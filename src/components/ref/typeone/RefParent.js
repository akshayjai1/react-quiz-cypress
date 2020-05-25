import React from "react";

const RefParent = (props) => {
  const fRef1 = React.createRef();
  let fRef2 = React.createRef();
  let fRef3 = null;
  let fRef4 = {};
  console.log("this is ref = re = ", fRef1);

  React.useEffect(() => {
    // debugger;
    console.log("this is ref in useEffect in RefParent", fRef1);
    console.log("this is ref in useEffect in RefParent", fRef2);
    console.log("this is ref in useEffect in RefParent", fRef3);
    console.log("this is ref in useEffect in RefParent", fRef4);
    window.reff = {
      fRef1,
      fRef2,
      fRef3,
      fRef4,
    };
  });
  return (
    <div>
      <p>RefParent component</p>
      <input name="first" ref={fRef1} />
      {/* fRef2 does */}
      <input
        name="second"
        ref={(e) => {
          fRef2 = e;
        }}
      />
      <input name="third" ref={fRef3} />
      <input name="fourth" ref={fRef4} />
    </div>
  );
};

export default RefParent;
