import login from "../fixtures/loginDetails.json";

describe("input data testing", () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });

  it("correct login details", () => {
    cy.login(login.validEmail, login.validPassword);
    cy.contains("Управление залами").should("be.visible");
  });

  it("invalid login details", () => {
    cy.login(login.invalidEmail, login.invalidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});
