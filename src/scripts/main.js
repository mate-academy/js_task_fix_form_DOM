'use strict';

const listInput = [...document.querySelectorAll('input')];

for (const input of listInput) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = `${input.name}`;
  input.parentNode.appendChild(label);
  
  const nameInput = input.name.toLowerCase();

  input.placeholder = nameInput[0].toUpperCase() + nameInput.slice(1);
}
