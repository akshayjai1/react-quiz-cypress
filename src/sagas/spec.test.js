const sum = require("./appServer").sum;
describe("testing sum function", function () {
  it("scenario 1 on sum function", function () {
    sum(9, 3);
  });
});
