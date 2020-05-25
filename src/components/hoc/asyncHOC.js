import React from "react";
/**
 * returning a promise directly
 * @param {} props
 */
async function asyncHOC(props) {
  const promise = new Promise((r, j) => {
    setTimeout(
      (x) => {
        r(x);
      },
      4000,
      9
    );
  });
  const x = await promise;
  return promise;
}
export default asyncHOC;
