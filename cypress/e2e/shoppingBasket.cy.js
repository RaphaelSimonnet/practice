describe('adding item in basket', () => {
   
    it('add item', function () {
      cy.intercept('POST', 'https://magento.softwaretestingboard.com/checkout/cart/add/*').as('addToCart') 
        {
          statusCode: 200
        }
     
      cy.visit('/')
      cy.get('#ui-id-5').click()
      cy.get('dd > .items > :nth-child(1) > a').click()
      cy.get('.product-item-info').first().click()
      cy.get('#option-label-size-143-item-166').click()
      cy.get('#option-label-color-93-item-50').click()
      cy.get('#product-addtocart-button').click()
      cy.wait(3000)
      //cy.wait('@addToCart')
      //cy.get('.showcart > .counter').should('be.visible')
      cy.get('.showcart').click()
      cy.visit('https://magento.softwaretestingboard.com/checkout/cart/')
      




     
        

  
    })

  
  
  })