class Login{
    static visitToLoginPage(){
        cy.visit("/")
    }
    static typeUsername(username){
        cy.get('#session_key').type(username)
    }
    static typePassword(pass){
        cy.get("#session_password").type(pass)
    }
    static clickOnLoginButton(){
        cy.get('button[class="sign-in-form__submit-button"]', {timeout: 30000}).contains("Sign in").should('be.visible').click()
    }

}

export default Login

