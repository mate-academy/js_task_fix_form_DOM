'use strict';

function capitalizeName(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder = capitalizeName(input.name);
  input.parentNode.appendChild(label);
}
