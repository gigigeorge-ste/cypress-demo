/// reference types='Cypress'


describe('CART website',()=>
{

  before(() => {

    cy.visit('/')

  })

  it('Get website logo to display and verify it',()=>
  {

    cy.displayAndVerifyLogo('GREENKART')
   
  })  

  it('Verify the items search starts with ca and add items to cart',()=>
  {

    cy.searchAndVerifyItemsCount('ca',4)
   
    //Aliasing
    cy.get('.product').as('productLocator')
    cy.get('@productLocator').should('have.length',5)

    cy.addToCartByItemIndex(1)
     
    cy.addToCartByItemName('Cashews')

    cy.addToCartByItemName('Cashews')
      
  })  

  it('Verify proceed to checkout',()=>
  {  

    cy.checkout()
   
  }) 

  it('Validate items and its prices listed and place order',()=>
  {

    cy.validateAddedItems(['Carrot - 1 Kg','Cashews - 1 Kg'])
 
    cy.validateAddedItemsPrice([56,650])

    cy.clickButton('Place Order')

  }) 

  it('Verify to select country and check terms and conditions',()=>
  {

    cy.selectCountryAndValidate('India')
 
    cy.checkAndValidateTermsAndConditions()
   
    cy.clickButton('Proceed')
   
  })

  it('Validate online order is successful',()=>
  {   

    cy.contains('Thank you, your order has been placed successfully')

  })

  })
