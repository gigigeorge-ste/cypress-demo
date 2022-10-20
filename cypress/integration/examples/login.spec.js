///<reference types= "Cypress"/>

import LoginPage from "../pageobjects/LoginPage"

describe('login using the page object model',()=>
{
it('login',()=>
{
 const lg = new LoginPage()

lg.visit()
lg.fillUsername('Admin')
lg.fillPassword('Admin123')
lg.selectLocation('Isolation Ward')
lg.clickLoginButton()


})
})