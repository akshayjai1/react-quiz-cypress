import React from "react";
/**
 * stateless component === A photoframe, we always/generally put a photo inside photoframe
 * @param {} props
 */
const Frame = (props) => {
  let { title, children, photo } = props;
  //title = "ABC"; //anti-pattern , never to be done in react;
  const str = `${title}`;
  return (
    <div>
      <p>
        {title}
        {photo}
      </p>
      <p>{str}</p>
      <p>{children}</p>
    </div>
  );
};
export const f = 1;
export default Frame;
