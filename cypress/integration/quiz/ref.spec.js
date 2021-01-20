describe("testing frontend", function () {
  it("testing homepage", function () {
    cy.visit("http://localhost:3001");
    cy.get("h1").contains("Redux App -Thunk - Saga -s StyleComponents");
    /*  cy.get("h1")
      .to("be.visible")
      .contains("Redux App -Thunk - Saga - StyleComponents"); */
  });
});
