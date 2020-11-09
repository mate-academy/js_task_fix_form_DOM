'use strict';

describe('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('there should be placeholder for first name', () => {
    cy.get('form:nth-child(1) .field:nth-child(1)').find('[placeholder="First name"]');
  });

  it('there should be placeholder for last name', () => {
    cy.get('form:nth-child(1) .field:nth-child(2)').find('[placeholder="Last name"]');
  });

  it('there should be placeholder for email', () => {
    cy.get('form:nth-child(1) .field:nth-child(3)').find('[placeholder="Email"]');
  });

  it('there should be placeholder for password', () => {
    cy.get('form:nth-child(1) .field:nth-child(4)').find('[placeholder="Password"]');
  });

  it('there should be placeholder for email', () => {
    cy.get('form:nth-child(2) .field:nth-child(1)').find('[placeholder="Email"]');
  });

  it('there should be placeholder for password', () => {
    cy.get('form:nth-child(2) .field:nth-child(2)').find('[placeholder="Password"]');
  });

  it('there should be label for first name', () => {
    cy.get('form:nth-child(1) label').contains("FIRST NAME");
  });

  it('there should be label for last name', () => {
    cy.get('form:nth-child(1) label').contains("LAST NAME");
  });

  it('there should be label for email', () => {
    cy.get('form:nth-child(1) label').contains("EMAIL");
  });

  it('there should be label for password', () => {
    cy.get('form:nth-child(1) label').contains("PASSWORD");
  });

  it('there should be label for email', () => {
    cy.get('form:nth-child(2) label').contains("EMAIL");
  });

  it('there should be label for password', () => {
    cy.get('form:nth-child(2) label').contains("PASSWORD");
  });
});
