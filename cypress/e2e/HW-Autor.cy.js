describe('Autorization', function () {

  before(function () {
    cy.visit('https://automationteststore.com/');
    cy.fixture('data').then(function (data) {
        user.data = data
    })
  })


it('Authorization', function ()  {
  cy.log('Open website login page');
  cy.contains('a', 'Login or register').click();

  cy.log('Authorize user');
  cy.get('#loginFrm_loginname').type(user.data.Login);
  cy.get('#loginFrm_password').type(user.data.Password);
  cy.get('button[type="submit"]').contains('Login').click();

  cy.get('span.subtext').should('contain', user.data.Username);
})
})
