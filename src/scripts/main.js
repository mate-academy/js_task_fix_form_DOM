'use strict';

const listOfInputs = Array.from(document.querySelectorAll('input'));

listOfInputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', `${input.id}`);
  label.textContent = `${input.name}`;

  input.setAttribute('placeholder', `${input.name}`);
  input.before(label);
});
