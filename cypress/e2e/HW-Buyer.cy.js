describe('Autorization-test', function () {

    before(function () {
      cy.visit('https://automationteststore.com/');
      cy.fixture('data').then(function (data) {
          this.data = data
      })
    })
   

it('Buyer', function ()  {
    cy.log('Purchase goods');
    cy.get('#filter_keyword').click().type('lipstick');
    cy.get('.button-in-search > .fa').click();
    cy.get('.cart').click();
    cy.get('#cart_checkout2').click();

    cy.get('#loginFrm_loginname').type(this.data.Login);
    cy.get('#loginFrm_password').type(this.data.Password);
    cy.get('button[type="submit"]').contains('Login').click();
  
    cy.get('#checkout_btn').click(); 
    cy.get('.maintext').should('contain','Your Order Has Been Processed!');

  })
  

})