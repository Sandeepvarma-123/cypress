/// <reference types="cypress" />

export class Runner{

    alertRunner(arg)
    {
        cy.on('window:alert',function(alertText){
            expect(alertText).eq(arg)
        })
    }
    alertConfirm(arg1){
        cy.get(':nth-child(5) > .panel-body > .btn').click()
        cy.on('window:confirm',function(alertText){
            return arg1
        })
    }
    promptBoxAlert(){
        //  cy.get(':nth-child(6) > .panel-body > .btn').click()
        cy.window().then(function($win){
        cy.stub($win,'prompt').returns("hello")
        cy.get(':nth-child(6) > .panel-body > .btn').click()
       
    })
    }
}
let obj=new Runner();
describe('demo',function(){

it('input forms', function(){
    cy.visit('http://demo.seleniumeasy.com/') //opening browser
    cy.get('.at-cm-no-button').click()
    cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').click()
    cy.get('.open > .dropdown-menu > :nth-child(5) > a').click()
    cy.get(':nth-child(4) > .panel-body > .btn').click()

    obj.alertRunner('I am an alert box!');
    // cy.get(':nth-child(5) > .panel-body > .btn').click()

    obj.alertConfirm(false);
    obj.promptBoxAlert();

    

    
})

})