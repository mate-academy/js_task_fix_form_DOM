describe('Input field', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have placeholder for first name in sign up form', () => {
    cy.get('#sign-up-name').should('have.attr', 'placeholder');
  });

  it('should have placeholder for last name in sign up form', () => {
    cy.get('#sign-up-last-name').should('have.attr', 'placeholder');
  });

  it('should have placeholder for email in sign up form', () => {
    cy.get('#sign-up-email').should('have.attr', 'placeholder');
  });

  it('should have placeholder for password in sign up form', () => {
    cy.get('#sign-up-password').should('have.attr', 'placeholder');
  });

  it('should have placeholder for email in sign in form', () => {
    cy.get('#sign-in-email').should('have.attr', 'placeholder');
  });

  it('should have placeholder for password in sign in form', () => {
    cy.get('#sign-in-password').should('have.attr', 'placeholder');
  });

  it('should have label for first name in sign up form', () => {
    cy.get('#sign-up-name').parent().children('label');
  });

  it('should have label for last name in sign up form', () => {
    cy.get('#sign-up-last-name').parent().children('label');
  });

  it('should have label for email in sign up form', () => {
    cy.get('#sign-up-password').parent().children('label');
  });

  it('should have label for password in sign up form', () => {
    cy.get('#sign-up-password').parent().children('label');
  });

  it('should have label for email in sign in form', () => {
    cy.get('#sign-in-email').parent().children('label');
  });

  it('should have label for password in sign in form', () => {
    cy.get('#sign-in-password').parent().children('label');
  });
});
