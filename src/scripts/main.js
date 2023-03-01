'use strict';

const createInput = document.querySelectorAll('.field-text');

for (const input of createInput) {
  const createLabel = document.createElement('Label');
  const placeholdeName = input.name[0].toUpperCase()
  + input.name.slice(1).split('N').join(' N');

  createLabel.className = 'field-label';
  createLabel.setAttribute('for', input.id);
  createLabel.textContent = input.placeholder;
  input.setAttribute('placeholder', placeholdeName);
  input.before(createLabel);
}
