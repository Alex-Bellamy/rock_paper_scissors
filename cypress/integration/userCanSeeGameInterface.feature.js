describe('Game interface', () => {
  it('game page successfully renders', () => {
      cy.visit('/');
      cy.get('#title').should('contain', 'Rock.Paper.Scissors');
      cy.get('#rock').should('exist')
      cy.get('#paper').should('exist')
      cy.get('#scissors').should('exist')
  })
})