describe('User can see scores', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: (champion) => {
        cy.stub(champion.Math, 'floor').returns(1);
      }
    })
  })

  it("user selects scissors - player wins, user selects scissors - player wins, user selects rock - computer wins", () => {
    cy.get('#scissors').click()
    cy.get('#outcome').should('contain', 'Player is victorious')
    cy.get('#scissors').click()
    cy.get('#outcome').should('contain', 'Player is victorious')
    cy.get('#rock').click()
    cy.get('#outcome').should('contain', 'Whipped by a computer')
    cy.contains('Player: 2').should('be.visible')
    cy.contains('Computer: 1').should('be.visible')
  })
})