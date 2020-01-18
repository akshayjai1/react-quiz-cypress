import Quiz from "../../pages/Quiz";

describe("Spec For JavaScript Quiz", () => {
  it("should open to quiz app", () => {
    cy.visit("http://localhost:3000"); //1
    cy.wait(2000);
    cy.get("h3.pageTitle").should("have.text", "Quiz Application"); //2
    const select = cy.get(".selectQuiz").should("exist"); //3
    select.select("C Sharp");
    select.select("Design Patterns");
    select.select("Javascript");
    select.select("Asp.Net");
    const totalQuestions = 10; //this can also be picked from front end
    for (let i = 0; i < totalQuestions; i++) {
      Quiz.selectOptionAndMove();
    }
    cy.get("button#review").click();
    cy.get(".answered").should("have.length", 10);
    cy.get("button#submit").click();
  });

  it("", () => {
    cy.server();
  });
});
