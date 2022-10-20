class LoginPage
{

    visit()
    {
        cy.visit('https://demo.openmrs.org/openmrs/login.htm')
    }

    fillUsername(value)
    {
        const field = cy.get('#username')
        field.clear()
        field.type(value)
        field.should('have.value',value)
        return this
    }

    fillPassword(value)
    {
        const field = cy.get('#password')
        field.clear()
        field.type(value)
        field.should('have.value',value)
        return this
    }

    selectLocation(value)
    {
        cy.contains('li',value).click()
    }
 
    clickLoginButton()
    {
        cy.get('#loginButton').click()
    }

   
}

export default LoginPage