'use strict';

const allInputs = document.querySelectorAll('input');

for (const input of allInputs) {
  const newLabel = document.createElement('label');

  input.setAttribute('placeholder', (input.name).split('N').join(' N'));
  input.style = 'text-transform: capitalize';
  newLabel.className = 'field-label';

  newLabel.textContent = input.placeholder;

  newLabel.setAttribute('for', input.id)
  
  input.before(newLabel);
}
