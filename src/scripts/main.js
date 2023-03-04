'use strict';

const createInput = document.querySelectorAll('.field-text');

for (const input of createInput) {
  const createLabel = document.createElement('Label');

  input.style = 'text-transform: capitalize';
  input.setAttribute('placeholder', input.name.split('N').join(' N'));
  input.before(createLabel);

  createLabel.className = 'field-label';
  createLabel.setAttribute('for', input.id);
  createLabel.textContent = input.placeholder;
}
