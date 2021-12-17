
/// <reference types="cypress" />
import  {Runner} from "../pages/cypress_demo"

let runner = new Runner();

// let task =['Wireframes','Mike Trout','in progress','Jane Doe'];


describe('cypress demo',function(){

it('simple forms demo',function(){
       runner.navigate('http://demo.seleniumeasy.com/');
       runner.open_ipforms();
       runner.simpleForms_message("Hello world");
        //    cy.get('#easycont > .row').screenshot()
        //    runner.simpleform1_validation();
       runner.simpleForms_total(3,6);
        //    cy.get('#easycont > .row').screenshot()
          

})
it('check box demo',function(){
           runner.open_ipforms();
           runner.checkBox();
           
 }) 

it('radio demo',function(){
    runner.open_ipforms();
    runner.open_radioBox();
    runner.checkRadioButton_1();
    runner.checkRadioButton_2();
    

})

it('table demo',function(){
//    runner.navigate();
    runner.open_table();
    runner.tableDemo();
    
    
})

it('Alerts',function(){
    // runner.navigate('http://demo.seleniumeasy.com/');
    runner.open_alertBox();
    runner.click_alert('I am an alert box!');
    runner.alertConfirm(false);
    runner.promptBoxAlert();
    cy.end()
   

})

     

})