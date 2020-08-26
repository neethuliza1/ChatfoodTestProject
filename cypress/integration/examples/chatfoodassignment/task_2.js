/// <reference types="cypress" />
describe('Test Case 1', () => {
    it('first end to end test', () => {
    cy.visit('https://www.themoviedb.org')
     cy.contains('Movies').click()
     cy.wait(5000)
     cy.contains("Top Rated").click({force:true})
     cy.get(':nth-child(1) > .filter > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').click()
     cy.get(':nth-child(1) > .filter > .k-widget > .k-dropdown-wrap > .k-input').contains('Rating Descending').click()
     cy.wait(5000)
    cy.get("li[data-offset-index='5']").contains('Release Date Ascending').click({force:true})
     cy.contains('Filters').click()
     cy.contains('Documentary').click()
     cy.get(':nth-child(1) > .apply > p.load_more > .no_click').click()
     cy.get("div.wrapper>a[href*='/movie/' ]").eq(0).click({force:true})

     cy.get('#videos').click()
     cy.get("div[class='video card no_border']").should(($tr) => {
        expect($tr).to.have.length(4)
    })

    })
})
