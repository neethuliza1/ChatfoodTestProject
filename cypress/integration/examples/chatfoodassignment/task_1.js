/// <reference types="cypress" />
describe('Test Case 1', () => {
    it('first end to end test', () => {
    cy.visit('https://www.themoviedb.org')
     cy.contains('TV Shows').click()
     cy.wait(5000)
  cy.get('.k-item.k-menu-item.k-state-default.k-first').contains("Popular").click({force:true})
  cy.get(':nth-child(1) > .filter > .k-widget > .k-dropdown-wrap > .k-input').contains("Popularity Descending").click({force:true})
  cy.get(':nth-child(1) > .filter > .k-widget > .k-dropdown-wrap > .k-input')
  
  cy.contains('Search').click({force:true})
  cy.get(':nth-child(2) > .content > h2 > a').click({force:true})

  cy.contains('Full Cast & Crew').should('be.visible')
  cy.contains('Top Billed Cast').should('be.visible')
  cy.contains('Play Trailer').should('be.visible')
  cy.contains('Top Contributors').should('be.visible')
  cy.contains('Content Score').should('be.visible')
  cy.contains('Posters').should('be.visible')

  
      
  
})
  })