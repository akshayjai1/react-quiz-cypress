/**
 * any function that we add to Cypress.Commands.add('nam',function)
 * can be accessed in cypress tests using cy.nam
 */

let random;
Cypress.Commands.add("getRandomInteger", (start, end) => {
  random = Math.floor(Math.random() * (end - start) + start);
  return random;
});

/**
 * following command will add delay of COMMAND_DELAY to execution of commands, so that we can look it properly on browser
 */
const COMMAND_DELAY = 500;

for (const command of [
  "visit",
  "click",
  "trigger",
  "type",
  "clear",
  "reload",
  "contains"
]) {
  Cypress.Commands.overwrite(command, (originalFn, ...args) => {
    const origVal = originalFn(...args);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(origVal);
      }, COMMAND_DELAY);
    });
  });
}
