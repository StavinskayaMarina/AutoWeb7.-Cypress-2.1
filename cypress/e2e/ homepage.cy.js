import selector from "../fixtures/selector";

describe("booking cinema tickets", () => {
  it("checking the correct display of the main page ", () => {
    cy.visit("/");
    cy.get(selector.dayOfWeek).should("have.length", 7);
  });
});