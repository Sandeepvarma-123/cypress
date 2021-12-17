/// <reference types="cypress" />

//import  {Runner} from "../integration/alerts"


it('input forms', function(){
    cy.visit('http://demo.seleniumeasy.com/') //opening browser
    cy.get('.at-cm-no-button').click()    //close the popup
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click() // select inputforms
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()  // select simple form demo
    cy.get('.form-group > #user-message').type('Hello world')  // enter a message
    cy.get('#get-input > .btn').click() // click show_message button
    cy.wait(2000)
    cy.get('#sum1').type('2')  // enter a value
    cy.get('#sum2').type('3')  // enter b value
    cy.get('#gettotal > .btn').click() // click get_total
    cy.wait(2000)
    
    
})

it('check box', function(){
    
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click() // select inputforms
    cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()  // select checkbox demo

    cy.get('#isAgeSelected')
    .check()
    //.should(be.checked)
    cy.get('#check1').click() // click checkall button
    cy.get(':nth-child(3) > label > .cb1-element').uncheck() // unchecking checked checkbox
    cy.get(':nth-child(4) > label > .cb1-element').uncheck()

})

