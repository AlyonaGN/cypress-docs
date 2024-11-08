describe("User Journey", () => {
  it("a user can find a course on the home page and complete the courses lessons", () => {
    // start course
    cy.visit("http://localhost:3000")
    cy.getByData("course-0").find("a").contains("Get started").click()
    cy.location("pathname").should("equal", "/testing-your-first-application")
    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    )
    // move to the next section
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )

    // move to the next section
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )

    // complete the course
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").contains("Complete Course").click()
    cy.location("pathname").should("eq", "/")
  })
})
