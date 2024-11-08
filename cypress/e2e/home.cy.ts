describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  const testingNextJsHeader = "Testing Next.js Applications with Cypress"
  const testingFoundationsHeader = "Testing Foundations"
  const cypressFundamentalsHeader = "Cypress Fundamentals"

  context("hero section", () => {
    it("h1 contains correct text", () => {
      cy.get("[data-test='hero-heading']").contains(testingNextJsHeader)
    })

    it("the features on home page are correct: 1 item", () => {
      cy.get("dt").eq(0).contains("4 Courses")
    })

    it("the features on home page are correct: 2 item", () => {
      cy.get("dt").eq(1).contains("25+ Lessons")
    })
  })

  context("Courses section", () => {
    it(`Course: ${testingNextJsHeader}`, () => {
      // just an example, generally it's a bad practice to select elements like that as it makes tests fragile
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })

    it(`Course: ${testingFoundationsHeader}`, () => {
      // just an example, generally it's a bad practice to select elements like that as it makes tests fragile
      cy.getByData("course-1").find("a").eq(3).click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })

    it.only(`Course: ${cypressFundamentalsHeader}`, () => {
      // just an example, generally it's a bad practice to select elements like that as it makes tests fragile
      cy.getByData("course-2").find("a").eq(3).click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})
