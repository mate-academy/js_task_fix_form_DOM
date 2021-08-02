'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const newLabel = document.createElement('label');

  input.parentElement.append(newLabel);
  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', input.id);
  newLabel.textContent = input.name;

  input.setAttribute('placeholder', input.name.charAt(0).toUpperCase()
  + input.name.slice(1));
}
