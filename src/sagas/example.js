function* first() {
  console.log("in function first");
  yield 9; // yield.1
  console.log("yielded 9");
  const x = yield 0; // yield.2
  console.log("yielded 0, got x = ", x);
  const y = yield {}; //yield.3
  console.log("yielded {} got y = ", y);
  const z = yield y;
  console.log(`yielded y=${y} got z = `, z);
  yield 8;
  return [x, y];
}
var y = first();

function k(x) {
  return y.next(x);
}
