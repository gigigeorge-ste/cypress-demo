
Cypress.Commands.add('displayAndVerifyLogo', (logoName) => 
{ 
    cy.get('.brand').then((logo)=>
    {
      const logoText = logo.text()
      cy.log(logoText)
    })
       // Assert the correct logo text is displayed
       cy.get('.brand').should('have.text',logoName)
})

Cypress.Commands.add('searchAndVerifyItemsCount', (searchText,itemsCount) => 
{ 
    cy.get('.search-keyword').type(searchText)
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',itemsCount)
    // Parent child chaining
    cy.get('.products').find('.product').should('have.length',itemsCount)
})

Cypress.Commands.add('addToCartByItemIndex', (itemIndex) => 
{ 
    cy.get('.products').find('.product').eq(itemIndex).contains('ADD TO CART').click()
})

Cypress.Commands.add('addToCartByItemName', (itemName) => 
{ 
// each- iteration through
cy.get('.products').find('.product').each(($el,index,$els) =>
{
  const itemText = $el.find('h4.product-name').text()

  if(itemText.includes(itemName))
 cy.wrap($el).find('button').click()
})
})

Cypress.Commands.add('checkout', () => 
{ 
  // click Cart icon
  cy.get('.cart-icon > img').click()
  cy.contains('PROCEED TO CHECKOUT').click()
})

Cypress.Commands.add('validateAddedItems', (itemNames) => 
{ 
  // Validate items
  let values = []
  cy.wait(2000)
  cy.get('table')
.find('tr td:nth-child(2)')
.each(($el, $index) => {
  cy.wrap($el)
   .invoke('text')
   .then(text => {
       if($index !== 0)
         values.push(text.trim())
       })
    })
   .then(() => expect(values).to.deep.eq(itemNames))
})

Cypress.Commands.add('validateAddedItemsPrice', (itemsPrices) => 
{ 
    let prices = []
   
    cy.get('table')
   .find('tr td:nth-child(4)')
   .each(($el, $index) => {
   cy.wrap($el)
   .invoke('text')
   .then(text => {
     if($index !== 0)
     prices.push(Number(text))
    })
   })
   .then(() => expect(prices).to.deep.eq(itemsPrices))
})

Cypress.Commands.add('clickButton', (buttonName) => 
{ 
    cy.contains(buttonName).click()
})

Cypress.Commands.add('selectCountryAndValidate', (country) => 
{ 
    cy.get('select').select(country).should('have.value',country)
})

Cypress.Commands.add('checkAndValidateTermsAndConditions', () => 
{ 
    cy.get('.chkAgree').check().should('be.checked')
})
