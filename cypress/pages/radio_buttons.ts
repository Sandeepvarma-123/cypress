export class RadioCheck{
 radioB(){
    cy.get(':nth-child(5) > .panel-body').find('[type=radio]').then(radioButtons =>{
        cy.wrap(radioButtons)
        .eq(0)
        .check()
 }




}