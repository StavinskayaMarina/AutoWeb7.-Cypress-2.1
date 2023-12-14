import login from "../fixtures/loginDetails.json";
import selector from "../fixtures/selector.json";

describe("testing booking a movie in an accessible theater ", () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });
  it("booking a movie ticket", () => {
    cy.login(login.validEmail, login.validPassword);
    cy.contains("Управление залами").should("be.visible");
    cy.get(selector.movieAdmin).then(($el) => $el.textContent);
    cy.contains("Унесенные ветром.").should("be.visible");
    cy.get(selector.movieAdmin)
      .invoke("text")
      .then((text) => {
        cy.visit("/client");
        cy.get(selector.movieAdmin);
        cy.contains("14:00").should("be.visible");
      });
    cy.get(selector.nextDay).click();
    cy.get(selector.movieAdmin).click();
    cy.contains("Начало сеанса").should("be.visible");
    cy.waitSeats();
    cy.get(selector.bookButton).click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
  });
});
