import React from "react";
/**
 * waiting to resolve a promise and then returning the resolved value
 * @param {*} props
 */
async function asyncHOC1(props) {
  const promise = new Promise((r, j) => {
    setTimeout(
      (x) => {
        r(x);
      },
      4000,
      <div>resolved promise</div>
    );
  });
  const x = await promise;
  return x;
}
export default asyncHOC1;
