'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');
  const lowerInputName = input.name.replace(/([A-Z])/g, ' $1').toLowerCase();

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = lowerInputName;
  input.parentElement.append(label);
  input.placeholder = lowerInputName[0].toUpperCase() + lowerInputName.slice(1);
}
