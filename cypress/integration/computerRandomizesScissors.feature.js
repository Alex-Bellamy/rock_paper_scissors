describe('Computer randomizes scissors', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: (champion) => {
        cy.stub(champion.Math, 'floor').returns(2)
      }
    })
  })

  it('user selects scissors, tie', () => {
    cy.get('#scissors').click()
    cy.get('#outcome').should('contain', 'Stalemate, draw')
  })

  it('user selects rock, player wins', () => {
    cy.get('#rock').click()
    cy.get('#outcome').should('contain', 'Player is victorious')
  })

  it('user selects paper, player looses', () => {
    cy.get('#paper').click()
    cy.get('#outcome').should('contain', 'Whipped by a computer')
  })
})
