import login from "../fixtures/loginDetails.json";
import selector from "../fixtures/selector.json";

describe("testing booking a movie in an accessible theater ", () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });

  it("booking a movie ticket", () => {
    cy.login(login.validEmail, login.validPassword);
    cy.contains("Управление залами").should("be.visible");
    cy.get(selector.availableSessions).eq(2);
    cy.get(selector.hallName).click();
    cy.get(selector.openTicketSalesButton).click();

    cy.visit("/client");
    cy.get(selector.nextDay).click();
    cy.get(selector.movies).click();
    cy.contains("Начало сеанса").should("be.visible");
    cy.waitSeats();
    cy.get(selector.bookButton).click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
  });
});
