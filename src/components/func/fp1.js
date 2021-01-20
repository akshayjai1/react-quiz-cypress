import { compose, pipe } from 'ramda';

// const add2 = (x) => x + 2;

// const add3 = (x) => x + 3;

// //debugger;
// const add5 = compose(add2, add3);
// console.log(add5(4));

const add2C = (x) => {
  //   //debugger;
  console.log(`adding 2 to ${x} and returning ${x + 2}`);
  return x + 2;
};

const add3C = (x) => {
  //   //debugger;
  console.log(`adding 3 to ${x} and returning ${x + 3}`);
  return x + 3;
};
// const add5C = add2C(add3C(8));
const add5P = pipe(add3C, add2C)(8);
const add5C = compose(add2C, add3C)(8);
// console.log(add5C(8));
// //debugger;
console.log(add5C);
console.log(add5P);
// check(); // c
// List(check()); //cccccccccc
// List(List(check())); // cccccccccc cccccccccc cccccccccc cccccccccc
