import React from 'react';
import { withRouter } from 'react-router-dom';
/**
 * stateless component === A photoframe, we always/generally put a photo inside photoframe
 * @param {} props
 */
const Frame = (props) => {
  let { title } = props;
  //debugger;
  const str = `${title}`;
  return (
    <div>
      <p>{title}</p>
      <p>The path name is {props.match.path}</p>
    </div>
  );
};
export const f = 1;

export default Frame;
// let RouterFrame = withRouter(Frame);
// export default RouterFrame;
// export default withRouter(Frame);
