/// reference types='Cypress'

describe('Go to CART website',()=>
{
  it('Visit cart',()=>
  {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
   
    // Parent child chaining
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
    
    // each- iteration through
    cy.get('.products').find('.product').each(($el,index,$els) =>
    {
      const itemText = $el.find('h4.product-name').text()

      if(itemText.includes('Cashews'))
     cy.wrap($el).find('button').click()
    })

    // click Cart icon
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
  }
  )
})