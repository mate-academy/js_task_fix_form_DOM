'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentElement.append(label);
  input.setAttribute('placeholder', capitalizeString(input.name));
});

function capitalizeString(str) {
  return str[0].toUpperCase() + str.slice(1);
}
