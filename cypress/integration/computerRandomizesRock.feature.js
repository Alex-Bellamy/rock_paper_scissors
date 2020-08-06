describe('Computer randomizes rock', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: (champion) => {
        cy.stub(champion.Math, 'floor').returns(0)
      }
    })
  })

  it('user selects rock, tie', () => {
    cy.get('#rock').click()
    cy.get('#outcome').should('contain', 'Stalemate, draw')
  })

  it('user selects paper, player wins', () => {
    cy.get('#paper').click()
    cy.get('#outcome').should('contain', 'Player is victorious')
  })

  it('user selects scissors, player looses', () => {
    cy.get('#scissors').click()
    cy.get('#outcome').should('contain', 'Whipped by a computer')
  })
})