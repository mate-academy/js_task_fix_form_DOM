describe('Fixed form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have placeholder for first name', () => {
    cy.get(':nth-child(1) > :nth-child(1) > input').should('have.attr', 'placeholder');
  });

  it('should have placeholder for last name', () => {
    cy.get(':nth-child(1) > :nth-child(2) > input').should('have.attr', 'placeholder');
  });

  it('should have placeholder for email', () => {
    cy.get(':nth-child(1) > :nth-child(3) > input').should('have.attr', 'placeholder');
  });

  it('should have placeholder for password', () => {
    cy.get(':nth-child(1) > :nth-child(4) > input').should('have.attr', 'placeholder');
  });

  it('should have placeholder for email', () => {
    cy.get('form:nth-child(2) .field:nth-child(1) > input').should('have.attr', 'placeholder');
  });

  it('should have placeholder for password', () => {
    cy.get('form:nth-child(2) .field:nth-child(2) > input').should('have.attr', 'placeholder');
  });

  it('should have label for first name', () => {
    cy.get('form:nth-child(1) > :nth-child(1) > label').should('exist');
  });

  it('should have abel for last name', () => {
    cy.get('form:nth-child(1) > :nth-child(2) > label').should('exist');
  });

  it('should have label for email', () => {
    cy.get('form:nth-child(1) > :nth-child(3) > label').should('exist');
  });

  it('should have label for password', () => {
    cy.get('form:nth-child(1) > :nth-child(4) > label').should('exist');
  });

  it('should have label for email', () => {
    cy.get('form:nth-child(2) > :nth-child(1) > label').should('exist');
  });

  it('should have label for password', () => {
    cy.get('form:nth-child(2) :nth-child(2) label').should('exist');
  });
});