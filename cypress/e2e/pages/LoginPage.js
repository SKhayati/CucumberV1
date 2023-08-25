export class LoginPage {

    setUsername(username) {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
       
    }

    setPasword(psw){
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(psw)
    }

    btLogin(){
        cy.get('.oxd-button').click()
    }

    btMenu(){
        cy.get('.oxd-userdropdown-tab').click()
    }

    btLogout(){
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    }
}

