describe('Game interface', () => {
  it('game page successfully renders', () => {
      cy.visit('/');
      cy.get('#title').should('contain', 'Rock.Paper.Scissors');
      cy.get('#sub-title').should('contain', 'The rules are simple...')
      cy.get('#rules-1').should('contain', '1. rock smashes scissors.')
      cy.get('#rules-2').should('contain', '2. scissors slice up paper.')
      cy.get('#rules-3').should('contain', '3. paper smothers rock.')
      cy.get('#rock').should('exist')
      cy.get('#paper').should('exist')
      cy.get('#scissors').should('exist')
  })
})