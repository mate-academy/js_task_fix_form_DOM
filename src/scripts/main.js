'use strict';

const inputList = document.querySelectorAll('input');

for (const input of inputList) {
  const label = document.createElement('label');

  input.setAttribute('placeholder', (input.name).split('N').join(' N'));
  input.style = 'text-transform: capitalize';

  label.className = `field-label`;
  label.textContent = input.placeholder;
  label.setAttribute('for', input.id);

  input.before(label);
}
