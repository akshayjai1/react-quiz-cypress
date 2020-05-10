import Quiz from "../../pages/Quiz";

describe("Spec For JavaScript Quiz", () => {
  /** it block === one cypress run */
  it("should open to quiz app", () => {
    cy.visit("http://localhost:3000"); //1
    cy.wait(3000);
    // co = document.querySelector('h3.pageTitle');
    // co.innerHTML = ""
    cy.get("h3.pageTitle").should("have.text", "Quiz Application"); //2
    cy.get("h3.pageTitle").then((element) => {
      //cypress assertions
      //element.find('p.title')
      const ele = element.closest(".wrapper");
      cy.wrap(ele).should("have.class", "wrapperOne");
    });
    var d = cy.fixture("/data/aspnet.json").as("aspFix"); //alias

    cy.server();
    cy.get("@aspFix").then((data) => {
      console.log(data);
    });
    cy.log("adfadfa");
    cy.route("GET", "http://localhost:3000/data/aspnet.json", "@aspFix").as(
      "ASP"
    );
    const select = cy.get(".selectQuiz").should("exist"); //3
    select.select("C Sharp");
    select.select("Design Patterns");
    select.select("Javascript");
    select.select("Asp.Net");
    // cy.wait('@ASP').then(asp => {
    //   cy.log(`got asp data ${JSON.stringify(asp)}`);
    // })
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
