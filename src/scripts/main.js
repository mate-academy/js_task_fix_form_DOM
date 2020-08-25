'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', `${input.getAttribute('id')}`);
  newLabel.textContent = input.name;
  input.before(newLabel);

  const getName = `${input.name[0].toUpperCase()}`
  + `${input.name.slice(1).toLowerCase()}`;

  input.setAttribute('placeholder', getName);
});
