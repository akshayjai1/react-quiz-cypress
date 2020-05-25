// Example #1
import React from "react";
const twice = (f, v) => f(v);

const add3 = (v) => v + 3;

twice(add3, 7); // 10

// Example #2

const filter = (predicate, xs) => xs.filter(predicate);

const is = (type) => (x) => Object(x) instanceof type;

filter(is(Number), [0, "1", 2, null]); // [0, 2]

// Example #3

const withCounter = (fn) => {
  let counter = 0;
  return (x, y) => {
    console.log(`Counter is ${++counter}`);
    return fn(x, y);
  };
};

let counter = 0;
const enhancedAdd = (x, y) => {
  console.log("counter is ", ++counter);
  let z = x + 3;
  return add(z, y);
};
const enhancedSub = (x, y) => {
  console.log("counter is ", ++counter);
  let z = x + 3;
  return sub(z, y);
};

let eA = withCounter(add);
let eS = withCounter(sub);

const add = (x, y) => x + y;
const sub = (x, y) => x - y;

const countedSum = withCounter(add);
console.log(countedSum(2, 3));
console.log(countedSum(2, 1));

// Output -
// Counter is 1
// 5
// Counter is 2
// 3

export const ReactInput = (props) => {
  return (
    <div>
      A React ReactSelect
      <input />
    </div>
  );
};
export const Comp1 = (props) => {
  return (
    <div>
      Component 1
      <input />
    </div>
  );
};
export const Comp2 = (props) => {
  return (
    <div>
      Component 2
      <select />
    </div>
  );
};

export const ReactSelect = (props) => {
  return (
    <div>
      A React ReactSelect
      <select />
    </div>
  );
};

export const withHTML = (Com) => {
  return (props) => {
    return (
      <div>
        A React ReactSelect
        <Com />
      </div>
    );
  };
};

export const ReactSelect1 = withHTML(Comp1);
export const ReactInput1 = withHTML(Comp2);
