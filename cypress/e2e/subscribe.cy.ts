describe("Subscribe ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    const testEmail = "jane@dgmail.com"
    cy.getByData("email-input").type(testEmail)
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains(testEmail)
  })

  it("does NOT allow users to subscribe to the email list with an invalid email", () => {
    cy.getByData("email-input").type("jane.doe")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("does NOT allow users to subscribe to the email list if they have already subscribed", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })
})
