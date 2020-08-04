describe('Computer randomizes paper', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: (champion) => {
        cy.stub(champion.Math, 'floor').returns(1);
      }
    })
  })

  it('user selects paper, tie', () => {
    cy.get('#paper').click()
    cy.get('#outcome').should('contain', 'Stalemate, draw')
  })

  it('user selects scissors, player wins', () => {
    cy.get('#scissors').click()
    cy.get('#outcome').should('contain', 'Player is victorious')
  })

  it('user selects rock, player looses', () => {
    cy.get('#rock').click()
    cy.get('#outcome').should('contain', 'Whipped by a computer')
  })
})