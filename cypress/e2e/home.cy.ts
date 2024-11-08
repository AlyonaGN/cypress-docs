describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("h1 contains correct text", () => {
    cy.get("[data-test='hero-heading']").contains(
      "Testing Next.js Applications with Cypress"
    )
  })

  it("the features on home page are correct: 1 item", () => {
    cy.get("dt").eq(0).contains("4 Courses")
  })

  it("the features on home page are correct: 2 item", () => {
    cy.get("dt").eq(1).contains("25+ Lessons")
  })
})
