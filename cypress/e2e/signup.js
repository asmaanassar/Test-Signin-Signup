/// <reference types="Cypress"/>
describe('test1', () => {
    it('test sign up', () => {
        let firstNameList=["Asma","Andaleeb","Mayssa"];
        let lastNameList=["Nassar","Zghoul","BanyIssa","alawamleh"];
        let randomIndexfortheFirstName = Math.floor(Math.random() * firstNameList.length)
        let randomIndexfortheLastName = Math.floor(Math.random() * lastNameList.length)
        //console.log(c) 
        console.log(firstNameList[randomIndexfortheFirstName]+" "+lastNameList[randomIndexfortheLastName])
        
        let randomNumtoUsedinEmail=Math.floor(Math.random()*(50000).toString())
let EmailAdress=firstNameList[randomIndexfortheFirstName]+"."+lastNameList[randomIndexfortheLastName]+randomNumtoUsedinEmail+"@"+"gmail.com";
        const charset='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let password = '';
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
        

        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
        cy.get('#firstname').type(firstNameList[randomIndexfortheFirstName])
        cy.get('#lastname').type(lastNameList[randomIndexfortheLastName])
        cy.get('#email_address').type(EmailAdress)

         const sympols= "@#$&%*!^({)}@";
         const Letters="abcdefghikwql;zmnbpoeqbxmuyrbtenxkzbldbzgsnxj";
         const Numbers="1234567890";
         let passwordList=[];
         Array.from({length:3},()=>{
            let element ="";
            Array.from({length:5},()=>{
                element+=sympols.charAt(Math.floor(Math.random()*sympols.length));
                element+=Letters.charAt(Math.floor(Math.random()*Letters.length));
                element+=Numbers.charAt(Math.floor(Math.random()*Numbers.length));
            })
            passwordList.push(element)
         })
         console.log(passwordList)
        cy.get('#password').type(passwordList[0])
        cy.get('#password-confirmation').type(passwordList[0])
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()

        cy.get('.message-success > div').should('contain',"Thank you")
        // cy.get("a[href*='magento.softwaretestingboard.com/customer/account']").contains("Sign In").click()
        // cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').select("Sign Out")
        // cy.get('#email').type(EmailAdress)
        // cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(passwordList[0])
        // cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    });
});