
describe('Registration', function () {

  before(function () {
    cy.visit('https://automationteststore.com/');

    cy.get('#customer_menu_top > li > a').click();
    cy.get('#accountFrm > fieldset > .btn').click();
    cy.fixture('data').then(function (data) {
        this.data = data
    })
  })

  it('Registration', function ()  {
 
  
    cy.get('[id="AccountFrm_firstname"]').type(this.data.FirstName).should('be.visible');
    cy.get('[id="AccountFrm_lastname"]').type(this.data.LastName).should('be.visible');
    cy.get('[id="AccountFrm_email"]').type(this.data.Email).should('be.visible');
    cy.get('[id="AccountFrm_telephone"]').type(this.data.Telephone).should('be.visible');
    cy.get('[id="AccountFrm_fax"]').type(this.data.Fax).should('be.visible');
    cy.get('[id="AccountFrm_company"]').type(this.data.Company).should('be.visible');
    cy.get('[id="AccountFrm_address_1"]').type(this.data.Address).should('be.visible');
    cy.get('[id="AccountFrm_city"]').type(this.data.City).should('be.visible');
    cy.get('[id="AccountFrm_zone_id"]').select('3520');
    cy.get('[id="AccountFrm_postcode"]').type(this.data.ZipCode);
    cy.get('[id="AccountFrm_country_id"]').select('10').should('have.value', '10');
    cy.get('[id="AccountFrm_loginname"]').type(this.data.LoginName).should('be.visible');
    cy.get('[id="AccountFrm_password"').type(this.data.PasswordReg).should('be.visible');
    cy.get('[id="AccountFrm_confirm"]').type(this.data.PasswordReg).should('be.visible');
    cy.get('[id="AccountFrm_newsletter1"]').click().should('be.visible');
    cy.get('[id="AccountFrm_agree"]').click().should('be.visible');
    cy.get('button[title="Continue"]').click().should('be.visible');


cy.get('[id="AccountFrm_zone_id"]').select('0').should('have.value', '0').get('body').click(50, 50, { force: true });
cy.get('[id="AccountFrm_password"').type(this.params.PasswordReg).should('be.visible');
cy.get('[id="AccountFrm_confirm"]').type(this.params.PasswordReg).should('be.visible');
cy.get('button[title="Continue"]').click().should('be.visible');

  })
})

  