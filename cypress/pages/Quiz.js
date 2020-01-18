class Quiz {
  static selectOptionAndMove() {
    cy.get(".option label").then(options => {
      cy.getRandomInteger(1, 5).then(integer => {
        cy.log(`selecting ${integer}`);
        cy.wrap(options[integer - 1]).click();
      });
    });
    cy.get("button#next").click();
  }
}

export default Quiz;
