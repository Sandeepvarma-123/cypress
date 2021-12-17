/// <reference types="cypress" />

let list = [0-5,5-15,15-50];

it('radio button', function() {
    
   // obj = new Cypress();
    cy.visit('http://demo.seleniumeasy.com/')
    cy.get('.at-cm-no-button').click()
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click()
    cy.get('.open > .dropdown-menu > :nth-child(3) > a').click()
    cy.get(':nth-child(4) > .panel-body').find('[type=radio]').then(radioButtons =>{
        for(let i=0;i<=1;i++){
        cy.wrap(radioButtons)
        .eq(i)
        .check()
        .should('be.checked')
        cy.get('#buttoncheck').click()
        // cy.get('.radiobutton').should('contain','Radio button ')

        }

    })
   for(let j=0;j<=1;j++){
   cy.get(':nth-child(5) > .panel-body').find('[type=radio]').then(radioButtons =>{
        cy.wrap(radioButtons)
        .eq(j)
        .check()
        cy.get(':nth-child(5) > .panel-body > :nth-child(3)').find('[type=radio]').then(radioButtons =>{
           // this.obj.radioB();
           for(let i=0; i<=2;i++){
            cy.wrap(radioButtons)
            .eq(i)
            .check()
            .should('be.checked')
            cy.get('.panel-body > .btn').click()
            cy.get('.groupradiobutton')
            //.should(be.Age group: list[i])

            cy.get('.groupradiobutton').each((element,index,list) => {

                expect(Cypress.$(element)).to.be.visible;
            })
        
         }
        })
    })
   }

})
      



    
    
    

