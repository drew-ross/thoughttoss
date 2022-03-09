// https://docs.cypress.io/api/introduction/api.html

describe("Page renders", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "thoughttoss");
  });
});
