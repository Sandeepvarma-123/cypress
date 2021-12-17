/// <reference types="cypress" />

let task =['Wireframes','Mike Trout','in progress','Jane Doe'];

it('table demo',function(){
    cy.visit('http://demo.seleniumeasy.com/')
    cy.get('.at-cm-no-button').click()
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').click()
    cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()
     for(let i=0; i<=3;i++) {
        cy.get('#task-table-filter').type(task[i])
        cy.get('.text-center > :nth-child(1) > .col-md-6 > :nth-child(2)').each(($el,
          index, $list) => {
            const txt = $el.text();
            if (txt.includes(task[i])){
             
              cy.get('.text-center > :nth-child(1) > .col-md-6 > :nth-child(2)')
              .eq(index).then(function(desc){
                const rsl = desc.text();
               //assertion to verify the text
               expect(rsl).to.contains(task[i]);
               cy.get('#task-table-filter').clear()
            })
         }
        })
      }
    })
      








