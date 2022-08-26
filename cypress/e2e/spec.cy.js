describe("main", () => {
  it("should work", () => {
    cy.visit("/");
    cy.contains("Powered by").click();
    cy.url().should("contain", "vercel.com");
  });
});
