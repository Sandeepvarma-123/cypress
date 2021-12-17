/// <reference types="cypress" />

it('check box', function(){
    cy.visit('http://demo.seleniumeasy.com/')
    cy.get('.at-cm-no-button').click()
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click()
    cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()
    cy.get('#isAgeSelected').check()
    cy.get('#check1').click()
    cy.get(':nth-child(3) > label > .cb1-element').uncheck()

})