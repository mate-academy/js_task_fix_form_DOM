'use strict';

describe('Fixed form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('there should be placeholder for first name', () => {
    cy.get(':nth-child(1) > :nth-child(1) > input').should('have.attr', 'placeholder');
  });

  it('there should be placeholder for last name', () => {
    cy.get(':nth-child(1) > :nth-child(2) > input').should('have.attr', 'placeholder');
  });

  it('there should be placeholder for email', () => {
    cy.get(':nth-child(1) > :nth-child(3) > input').should('have.attr', 'placeholder');
  });

  it('there should be placeholder for password', () => {
    cy.get(':nth-child(1) > :nth-child(4) > input').should('have.attr', 'placeholder');
  });

  it('there should be placeholder for email', () => {
    cy.get('form:nth-child(2) .field:nth-child(1) > input').should('have.attr', 'placeholder');
  });

  it('there should be placeholder for password', () => {
    cy.get('form:nth-child(2) .field:nth-child(2) > input').should('have.attr', 'placeholder');
  });

  it('there should be label for first name', () => {
    cy.get('form:nth-child(1) > :nth-child(1) > label').should('exist');
  });

  it('there should be label for last name', () => {
    cy.get('form:nth-child(1) > :nth-child(2) > label').should('exist');
  });

  it('there should be label for email', () => {
    cy.get('form:nth-child(1) > :nth-child(3) > label').should('exist');
  });

  it('there should be label for password', () => {
    cy.get('form:nth-child(1) > :nth-child(4) > label').should('exist');
  });

  it('there should be label for email', () => {
    cy.get('form:nth-child(2) > :nth-child(1) > label').should('exist');
  });

  it('there should be label for password', () => {
    cy.get('form:nth-child(2) :nth-child(2) label').should('exist');
  });
});
