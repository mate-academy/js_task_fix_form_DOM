'use strict';

const inputs = document.querySelectorAll('input');
const listOfInputs = [...inputs];

for (const input of listOfInputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name;
  label.setAttribute('for', input.id);

  input.setAttribute('placeholder', input.name.toUpperCase());
  input.parentElement.append(label);
}
