'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.placeholder = capitalize(input.name);
  input.parentElement.append(label);
};

function capitalize(str) {
  const capitalizeStr
    = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return capitalizeStr;
};
